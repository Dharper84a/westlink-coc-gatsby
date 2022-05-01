import React, { useEffect, useState } from "react"

const headers = { "Content-Type": "application/json" }
const apiUrl = 'https://www.googleapis.com/youtube/v3/';
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
        videoEmbeddable: true,
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
  url.search = new URLSearchParams(params)
  return url
}

const doRequest = async (params, type) => {
  const url = buildUrl(params, type)

  if(typeof window != 'undefined') {
    return fetch(url, headers)
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(response => {
        return response
      })
  } else {
    return new Promise();
  }

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
  const [hookProperties, setHookProperties] = useState({
    getLive: () => {},
    getVideos: () => {},
    getPlaylist: () => {}
  });

  useEffect(() => {
    setHookProperties(
      {
        getLive: getLiveBroadcast,
        getVideos: getVideoList,
        getPlaylist: getPlaylist,
      }
    );
  }, []);
  return {
    getLive: getLiveBroadcast,
    getVideos: getVideoList,
    getPlaylist: getPlaylist,
  };
}
