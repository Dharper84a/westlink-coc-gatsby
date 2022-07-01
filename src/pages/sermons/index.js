import React, {useState, useEffect} from 'react';

import useYouTube from '../../hooks/useYouTube';

// import VideoCard from '../../components/Cards/Video';

const PageSermons = (props) => {
  const youTube = useYouTube();
  const [response, setResponse] = useState(null);
  const [channel, setChannel] = useState(null);
  const [playlists, setPlaylists] = useState(null);
  const [videos, setVideos] = useState([]);

  
  useEffect(() => {
    if(!youTube) return () => {}
    
    // youTube.fetch('channel');
    // youTube.fetch('playlists');
    
    return () => {}
  }, [youTube])

  useEffect(() => {
    
    if(youTube.response.channel) {
      setChannel(youTube.response.channel)
    } else {
      youTube.channel();
    }

    if(youTube.response.playlists) {
      setPlaylists(youTube.response.playlists)
    } else {
      youTube.playlist();
    }
    
    return () => {}
  }, [youTube.response])

  useEffect(() => {
    if(channel) console.log(channel);
    if(playlists) console.log(playlists);
  }, [channel, playlists])

  return(
    <div>Sermons Page</div>
  )
}

export default PageSermons