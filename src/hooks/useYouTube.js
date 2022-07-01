import React, { useEffect, useState, useReducer } from "react"

const standardParams = {
  key: process.env.GATSBY_GOOGLE_APIKEY,
}

const headers = { "Content-Type": "application/json" }
const apiUrl = "https://www.googleapis.com/youtube/v3/"

const STATUS_ENUM = {
  IDLE: "IDLE",
  WAITING: "WAITING",
  PROCESSING: "PROCESSING",
}

const fetchMethods = [
  {
    action: "channel",
    method: "channels",
    params: {
      id: process.env.GATSBY_YOUTUBE_CHANNEL,
      order: "date",
      part: "snippet,contentDetails",
    },
  },
  {
    action: "videos",
    method: "planet",
  },
  {
    action: "playlists",
    method: "playlistItems",
    params: {
      playlistId: process.env.GATSBY_PODCAST_PLAYLIST,
      order: "date",
      part: "snippet,contentDetails,status",
    },
  },
]
const initialState = {
  queue: [],
  activeItem: null,
  status: STATUS_ENUM.IDLE,
  itemResponse: null,
  response: null,
}

const reducer = (state, action) => {
  const validateAddQueue = newItem => {
    if (state.queue.length >= 10) return false

    let allowed = true

    // verify we do not already have the same in queue
    state.queue.forEach(item => {
      if (item.action === newItem.action && item.id === newItem.id)
        allowed = false
    })

    if(state.activeItem) {
      if(state.activeItem.action === newItem.action && state.activeItem.id === newItem.id)
        allowed = false;
    }

    return allowed
  }

  switch (action.type) {
    case "ADD_QUEUE":
      
      // add to the queue
      const newOptions = { action: null, id: null }
      if (typeof action.fetchType === "object") {
        newOptions.action = action.fetchType.action
        newOptions.id = action.fetchType.id
      } else {
        newOptions.action = action.fetchType
      }

      const newItem = {
        ...newOptions,
        ...fetchMethods.find(item => item.action === newOptions.action),
      }

      if (validateAddQueue(newItem)) {
        return {
          ...state,
          queue: [...state.queue, newItem],
        }
      } else {
        return state
      }
    case "SET_FETCH":
      if (state.queue.length === 0) return state

      const activeItem = state.queue.shift()
     
      return {
        ...state,
        queue: state.queue,
        activeItem: activeItem,
        status: STATUS_ENUM.WAITING,
      }
    case "FETCH":
      if (!state.activeItem) return state
      if (state.status === "PROCESSING") return state

      const url = new URL(`${apiUrl}${state.activeItem.method}`)
      url.search = new URLSearchParams({
        ...standardParams,
        ...state.activeItem.params,
      })

      return {
        ...state,
        status: STATUS_ENUM.PROCESSING,
        response: fetch(url),
      }
    case "FETCH_DONE":
      if (state.status !== STATUS_ENUM.PROCESSING) return state
   

      return {
        ...state,
        status: STATUS_ENUM.IDLE,
        itemResponse: {
          type: state.activeItem.action,
          response: action.response,
        },
        response: null,
        activeItem: null,
      }
  }
}

export default function useYouTube() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [latestResponse, setLatestResponse] = useState(null)
  const [responses, setResponses] = useState({
    channel: null,
    videos: null,
    playlists: null,
  })
  
  const channel = () => {
    if(latestResponse?.type === 'channel') return latestResponse.data;
    if (responses.channel) return responses.channel
    

    dispatch({
      type: "ADD_QUEUE",
      fetchType: "channel",
    })
   
  }

  const playlist = () => {
    if(latestResponse?.type === 'playlists') return latestResponse.data;
    if (responses.playlists) return responses.playlists
    

    dispatch({
      type: "ADD_QUEUE",
      fetchType: "playlists",
    })
   
  }

  useEffect(() => {
    switch (state.status) {
      case "IDLE":
        if(state.queue.length > 0) {
          dispatch({
            type: "SET_FETCH",
          })
        }

        break
      case "WAITING":
        if (state.activeItem) {
          
          dispatch({
            type: "FETCH",
          })
        }
        break
      case "PROCESSING":
        if (state.response) {
          
          state.response.then(res => {
            try{
              res.json().then(jsonRes => {
                setLatestResponse({type: state.activeItem.action, data: jsonRes})
                dispatch({
                  type: "FETCH_DONE",
                  response: jsonRes,
                })
              })
            }catch(e) {
              // nothing
            }
 
          })
        }
        break
    }
  }, [state.status, state.queue, state.activeItem, state.response])



  useEffect(() => {
    if (!latestResponse) return () => {}

    switch (latestResponse.type) {
      case "channel":
        setResponses(prevState => ({
          ...prevState,
          channel: latestResponse.data,
        }))
        break
      case "videos":
        setResponses(prevState => ({
          ...prevState,
          videos: latestResponse.data,
        }))
        break
      case "playlists":
        setResponses(prevState => ({
          ...prevState,
          playlists: latestResponse.data,
        }))
        break
    }

    return () => {}
  }, [latestResponse])

  return {
    channel: channel,
    playlist: playlist,
    response: {
      latest: latestResponse,
      ...responses,
    },
  }
}
