import React from 'react';

import MapInstance from '../../Map/Map';

export const EventSidebar = ({title, lat, lon}) => {
  console.log(lat);
  console.log(lon)
  return (
    <aside>
      <MapInstance 
        position={{ lat: lat, lng: lon }}
        marker={{
          position: { lat: lat, lng: lon },
          title: `${title} event location`
        }}
        mapContainerStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          minWidth: "300px",
          maxWidth: "800px",
        }}
        className="sidebarMap"
      />
    </aside>
  )
}

export default EventSidebar;