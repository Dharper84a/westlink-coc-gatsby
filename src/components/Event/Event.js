import React from 'react';

// Layout
import { ContentAndSidebar } from '../../templates/Templates';

// Components
import HorizontalHeader from '../Headers/Horizontal/HorizontalHeader';
import CategoryAndTitle from '../CategoryAndTitle/CategoryAndTitle';
import EventContent from './EventContent/EventContent';
import EventSidebar from './EventSidebar/EventSidebar';

const Event = (event) => {
  console.log(event);
  return (
    <>
      <HorizontalHeader images={event.image} />
      <CategoryAndTitle category="Event" title={event.title} />
      <ContentAndSidebar>
        <EventContent content={event.content} date={event.eventDate}/>
        <EventSidebar title={event.title} {...event.eventLocation} />
      </ContentAndSidebar>
    </>
  )
}

export default Event;