import React, { useState,useEffect } from 'react';
import { faBrush, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const defaultState = {
  isServiceActive: false,
  switchTheme: () => {},
  theme: 'light',
  themeIcon: null,
}

const SiteContext = React.createContext(defaultState)

const SiteProvider = (props) => {
  // THEME
  const [currentTheme, setCurrentTheme] = useState('light');
  const [themeIcon, setThemeIcon] = useState(faBrush);

  const onSwitchThemeHandler = () => {
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    setCurrentTheme(newTheme);
  }

  useEffect(() => {
    if(
      !currentTheme ||
      typeof window === 'undefined'
    ) {
      return () => {}
    }

    // let newThemeIcon = currentTheme === 'light' ? faMoon : faSun;

    window.localStorage.setItem('theme', currentTheme);
    // setThemeIcon(newThemeIcon);

    return () => {}
  }, [currentTheme])

  useEffect(() => {
    if(typeof window === 'undefined') return () => {}

    let storedTheme = window.localStorage.getItem('theme');
    
    if(storedTheme) setCurrentTheme(storedTheme);

    return () => {}
  }, []);

  // END - THEME

  // SERVICE CHECKER
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
        isServiceActive,
        switchTheme: onSwitchThemeHandler,
        theme: currentTheme,
        themeIcon, themeIcon,
      }}
    >
      {props.children}
    </SiteContext.Provider>
  )
}

export default SiteContext

export {SiteProvider}