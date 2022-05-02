import React from 'react';

import * as styles from './DesktopNavigation.module.scss';


const DesktopNavigation = (props) => {

  const mouseOutSubmenuHandler = (e) => {
    // console.log(e.target);
    // e.target.classList.add("fx-desktop-submenu-fadeout");
    // e.target.classList.remove("fx-desktop-submenu-fadein");
    // e.target.style.display = "block";
    // setTimeout(() => {
    //   e.target.style.display = null;
    //   e.target.classList.add("fx-desktop-submenu-fadein");
    //   e.target.classList.remove("fx-desktop-submenu-fadeout");
    // },3000);
  }
  return (
    <ul className={styles.desktopNavigation}>
      <li className="has-submenu">
        About
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
      </li>
      <li className="has-submenu">
        Connect
        <ul className="fx-desktop-submenu-fadein" onMouseOut={mouseOutSubmenuHandler}>
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
      </li>
      <li className="has-submenu">
        Media
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
      </li>
    </ul>
  )
}

export default DesktopNavigation;