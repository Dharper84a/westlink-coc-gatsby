import React from "react"

const headers = { "Content-Type": "application/json" }
const apiUrl = 'https://www.googleapis.com/youtube/v3/';
//https://www.googleapis.com/youtube/v3/playlistItems
const searchUrl = `https://www.googleapis.com/youtube/v3/search?channelId=${process.env.GATSBY_YOUTUBE_CHANNEL}&key=${process.env.GATSBY_GOOGLE_APIKEY}`
const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.GATSBY_GOOGLE_APIKEY}&part=snippet&playlistId=${process.env.GATSBY_PODCAST_PLAYLIST}`
const standardParams = {
  key: process.env.GATSBY_GOOGLE_APIKEY,
}

const getRequestParams = (payload, type = "search") => {
  switch (type) {
    case "live":
      return {
        ...standardParams,
        ...payload,
        channelId: process.env.GATSBY_YOUTUBE_CHANNEL,
        eventType: "live",
        type: "video",
        part: 'snippet',
      }
    case "search":
      return {
        ...standardParams,
        ...payload,
        channelId: process.env.GATSBY_YOUTUBE_CHANNEL,
        order: "date",
        part: 'snippet',
      }
    case "playlistItems":
      return {
        ...standardParams,
        ...payload,
        playlistId: process.env.GATSBY_PODCAST_PLAYLIST,
        part: 'snippet'
      }
    default:
      break
  }

  return standardParams
}

const buildUrl = (params, type) => {
  const url = new URL(`${apiUrl}${type}`);
  // if(type === 'search') {
  //   url = new URL(`${apiUrl}${type}`);
  // } else if(type === 'playlistItems') {
  //   url = new URL(playlistItemsUrl);
  // }

  url.search = new URLSearchParams(params)

  // console.log(url);
  return url
}

const doRequest = async (params, type) => {
  const url = buildUrl(params, type)

  return fetch(url, headers)
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(response => {
      return response
    })
}
const getLiveBroadcast = async (payload = {}) => {
  const params = getRequestParams(payload, "live")

  return await doRequest(params, "search")
}

const getVideoList = async (payload = {}) => {
  const params = getRequestParams(payload)
  return await doRequest(params, "search")
}

const getPlaylist = async (payload = {}) => {
  const params = getRequestParams(payload, 'playlistItems')
  return await doRequest(params, "playlistItems")
}

export default function useYouTube(type = "channel") {
  return {
    getLive: getLiveBroadcast,
    getVideos: getVideoList,
    getPlaylist: getPlaylist,
  }
}
