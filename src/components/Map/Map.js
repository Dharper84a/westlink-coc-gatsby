import React from 'react'
import { Map, Marker, GoogleApiWrapper } from "google-maps-react"

import * as styles from './Map.module.scss';
const MapInstance = (props) => {
  return (
    <div className={`${styles[props.className]}`}>
      <Map 
        google={props.google} 
        zoom={14} 
        initialCenter={props.position}
        // style={style}
        scrollwheel={false}
        draggable={false}
        keyboardShortcuts={false}
        disableDoubleClickZoome={true}
        containerStyle={props.mapContainerStyle}
      >
        <Marker
          title={props.marker.title}
          position={props.marker.position} />

      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: `${process.env.GOOGLE_APIKEY}`
})(MapInstance)
