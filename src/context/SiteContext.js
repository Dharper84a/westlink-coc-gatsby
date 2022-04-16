import React, { useState,useEffect } from 'react';

const defaultState = {
  isServiceActive: false,
}

const SiteContext = React.createContext(defaultState)

const SiteProvider = (props) => {
  const [isServiceActive, setIsServiceActive] = useState(false)

  const handleIsServiceActive = () => {
    let d = new Date();
    let result = false;
   
    if(d.getDay() === 0) {
      if(d.getHours() >= 10 && d.getHours() < 13) {
        result = true;
      }
    }

    setIsServiceActive(result)
  }

  useEffect(() => {
    handleIsServiceActive();
    var timer = setInterval(() => {
      handleIsServiceActive();
    }, 30000);
    
    return () => {
      clearInterval(timer);
    }
  },[]);

  return (
    <SiteContext.Provider
      value={{
        isServiceActive
      }}
    >
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteContext

export {SiteProvider}