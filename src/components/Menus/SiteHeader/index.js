import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { faBarsStaggered, faTimes, faCalendar, faArrowRight, faEllipsis } from "@fortawesome/free-solid-svg-icons"

import ButtonStandard from "../../Buttons/Standard"
import ButtonIcon from "../../Buttons/Icon"
import Button from '../../Buttons';

import {
  Menu,
  Inner,
  Overlay,
  Drawer,
  DrawerHeader,
  MenuList,
  TopMenuList,
  TopItem,
  Column,
  Heading,
  List,
  Item,
  MediaGroup,
  MediaList,
  MediaItem,
  MediaItemMore,
  Divider,
} from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuSiteHeader = props => {
  const [isDrawerActive, setIsDrawerActive] = useState(false)
  const [transition, setTransition] = useState("closed")

  let transitionTimer = null

  const onToggleDrawerHandler = () => {
    console.log("Toggle Drawer")
    setTransition(isDrawerActive ? "closing" : "opening")
    setIsDrawerActive(!isDrawerActive)
  }

  useEffect(() => {
    console.log("Transition", transition)
    if (transition === "closing" || transition === "opening") {
      transitionTimer = setTimeout(() => {
        setTransition(transition === "closing" ? "close" : "opened")
      }, 300)
    }

    return () => {
      clearTimeout(transitionTimer)
    }
  }, [transition])
  return (
    <Menu>
      <ButtonStandard
        icon={faEllipsis}
        label="Menu"
        onClick={onToggleDrawerHandler}
        type="solid"
        color="light"
        className="header-menu-button"
      />
      
      <Drawer className={transition}>
        <DrawerHeader>
          <ButtonIcon
            icon={faTimes}
            onClick={onToggleDrawerHandler}
            type="solid hover-rotate red hover-shadow"
          />
        </DrawerHeader>
        <Inner>
          <TopMenuList>
            <TopItem>
              <Link
                to="/events"
                title="Current and upcomming events at Westlink Church of Christ"
              >
                Upcoming Events
              </Link>
            </TopItem>
            <TopItem>
              <Link
                to="/our-values-and-beliefs"
                title="Westlink Church of Christ values and beliefs"
              >
                Values and Beliefs
              </Link>
            </TopItem>
          </TopMenuList>
          <Divider />
          <MenuList>
            <Column>
              <Heading>About</Heading>
              <List>
                <Item>
                  <Link to="/our-people" title="Explore the people that call Westlink Church of Christ their home">
                    Our People
                  </Link>
                </Item>
                <Item>
                  <Link to="/our-leaders" title="View the people leading Westlink Church of Christ">
                    Our Leaders
                  </Link>
                </Item>
                <Item>
                  <Link to="/community" title="See what Westlink Church of Christ does for our community">
                    Community Support
                  </Link>
                </Item>
                <Item>
                  <Link to="/missions" title="See the missions that Westlink Church of Christ is involved in">
                    Ongoing Missions
                  </Link>
                </Item>
              </List>
            </Column>
            <Column>
              <Heading>Join</Heading>
              <List>
                <Item>
                  <Link to="/our-people" title="Explore the people that call Westlink Church of Christ their home">
                    Visiting
                  </Link>
                </Item>
                <Item>
                  <Link to="/our-leaders" title="View the people leading Westlink Church of Christ">
                    Becoming a Member
                  </Link>
                </Item>
                <Item>
                  <Link to="/missions" title="See the missions that Westlink Church of Christ is involved in">
                    Groups to Join
                  </Link>
                </Item>
              </List>
            </Column>
            <Column>
              <Heading>Church</Heading>
              <List>
                <Item>
                  <Link to="/donate" title="Explore the people that call Westlink Church of Christ their home">
                    Donate
                  </Link>
                </Item>
                <Item>
                  <Link to="/contact" title="View the people leading Westlink Church of Christ">
                    Contact
                  </Link>
                </Item>
                <Item>
                  <Link to="/facilities" title="See the missions that Westlink Church of Christ is involved in">
                    Facilities
                  </Link>
                </Item>
                <Item className="inset">
                  <Button label="Reserve Facilities" type="solid" variant="dark" />
                </Item>
              </List>
            </Column>
          </MenuList>
          
          <MediaList>
            <Heading>Sermons</Heading>
            <MediaGroup>
              <MediaItem className="loading">

              </MediaItem>
              <MediaItemMore>
                <Link to="/media/sermons" title="Explore all of our sermons">
                  More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </MediaItemMore>
            </MediaGroup>
          </MediaList>
          <MediaList>
            <Heading>Daily Devotionals</Heading>
            <MediaGroup>
              <MediaItem className="loading">

              </MediaItem>
              <MediaItemMore>
                <Link to="/media/daily-devotionals" title="Explore all of our Daily Devotionals">
                  More <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </MediaItemMore>
            </MediaGroup>
          </MediaList>
        </Inner>
      </Drawer>
      <Overlay className={transition} onClick={onToggleDrawerHandler}></Overlay>
    </Menu>
  )
}

export default MenuSiteHeader
