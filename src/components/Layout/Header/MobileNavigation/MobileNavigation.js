import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { fab, faYoutube, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import * as styles from './MobileNavigation.module.scss';

const MobileNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileDrawerAnimation, setMobileDrawerAnimation] = useState('fx-mobile-drawer-open');
  const [mobileIconAnimation, setMobileIconAnimation] = useState('');
  
  var animationTimer = null;
  
  const onMobileButtonClickHandler = () => {
    clearTimeout(animationTimer);
    if(isOpen) {
      setMobileDrawerAnimation('fx-mobile-drawer-close');
      setMobileIconAnimation('fx-mobile-icon-close');
      animationTimer = setTimeout(() => {
        setIsOpen(false);
        
      }, 250);
    } else {
      setIsOpen(true);
      setMobileDrawerAnimation('fx-mobile-drawer-open');
      setMobileIconAnimation('fx-mobile-icon-open');
    }
    
  }
  return (
    <div className={styles.mobileNavigation}>
      <button onClick={onMobileButtonClickHandler} aria-label="Toggle mobile navigation">
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={mobileIconAnimation} />
      </button>
      { isOpen &&
      <div className={`${styles.mobileDrawer} ${mobileDrawerAnimation}`}>
        <div className={styles.mobileDrawerColumns}>
          <div className={styles.mobileDrawerSocial}>
            <div className={styles.gradientBorder}></div>
            <ul>
              <li>
                <a href="https://www.youtube.com/channel/UCwvIPoZGrLxCVAzmO77DZOg" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} /> 
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/WestlinkChurch/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} /> 
                </a>
              </li>
            </ul>
            
          </div>
          <div className={styles.mobileDrawerGrid}>
            <div>
              <header>
                <span>About</span>
              </header>
              <nav>
                <ul>
                  <li>
                    <a href="/our-beliefs">Our Beliefs</a>
                  </li>
                  <li>
                    <a href="/ministers-and-staff">Ministers and Staff</a>
                  </li>
                  <li>
                    <a href="/missions">Missions</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <header>
                <span>Connect</span>
              </header>
              <nav>
                <ul>
                  {/* <li>
                    <a href="/visit-westlink">Visit Westlink</a>
                  </li> */}
                  <li>
                    <a href="/becoming-a-member">Becoming a Member</a>
                  </li>
                  <li>
                    <a href="/groups-and-ministries">
                      Groups and Ministries
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <header>
                <span>Media</span>
              </header>
              <nav>
                <ul>
                  <li>
                    <a href="/live">Watch Live</a>
                  </li>
                  <li>
                    <a href="/podcasts">Podcasts</a>
                  </li>
                  <li>
                    <a href="/sermons">Past Sermons</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default MobileNavigation;