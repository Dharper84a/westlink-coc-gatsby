import React from "react"

import * as styles from "./Templates.module.scss"

export const ContentAndSidebar = props => {
  return <div className={styles.contentAndSidebar}>{props.children}</div>
}
export const UpcomingEventsContainerTemplate = props => {
  return <div className={styles.upcomingEventsContainer}>{props.children}</div>
}
export const CallToActionContainerTemplate = props => {
  return <section className={styles.ctaCardContainer}>{props.children}</section>
}
export const PeoplePageContainer = props => {
  return <div className={styles.peoplePageContainer}>{props.children}</div>
}

export const PeoplePageContent = props => {
  return <div className={styles.peoplePageContent}>{props.children}</div>
}
export const PeoplePersonsContainer = props => {
  return <div className={styles.peoplePersonsContainer}>{props.children}</div>
}

export const PeoplePerson = props => {
  return <div className={styles.peoplePerson}>{props.children}</div>
}

export const PeopleFeaturedPerson = props => {
  return <div className={styles.peopleFeaturedPerson}>{props.children}</div>
}

export const PeoplePersons = props => {
  return <div className={styles.peoplePerson}>{props.children}</div>
}

export const StreamBox = props => {
  return <div className={styles.streamBox}>{props.children}</div>
}
export const VideoPageContainer = props => {
  return <div className={styles.videoPageContainer}>{props.children}</div>
}

export const DefaultGridContainer = props => {
  return <div className={styles.defaultGridContainer}>{props.children}</div>
}

export const DefaultGridItem = props => {
  return <div className={styles.defaultGridItem}>{props.children}</div>
}
export const DefaultPageContainer = props => {
  return <div className={styles.defaultPageContainer}>{props.children}</div>
}

export const DefaultPageMedia = props => {
  return <div className={styles.defaultPageMedia}>{props.children}</div>
}

export const DefaultPageContent = props => {
  return <div className={styles.defaultPageContent}>{props.children}</div>
}

export const SidebarPageContainer = props => {
  return <div className={styles.sidebarPageContainer}>{props.children}</div>
}
export const PageContainer = props => {
  return <div className={styles.pageContainer}>{props.children}</div>
}

export const PageContent = props => {
  return <div className={styles.pageContent}>{props.children}</div>
}

export const PageSidebar = props => {
  return <div className={styles.pageSidebar}>{props.children}</div>
}
