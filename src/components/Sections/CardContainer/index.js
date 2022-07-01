import React from 'react'

import EventCard from '../../Cards/Event';

import {CardContainerComponent, Content, Heading, CardList} from './styles'

export const CardContainer = (props) => {
  const items = props.items ? props.items : false;

  const itemHandler = (item, key) => {
    switch(props.type) {
      case 'event':
        return (
          <EventCard {...item} key={key} />
        )
      default: return <></>
    }
  }
  return (
    <CardContainerComponent>
      <Content>
        <Heading>{props.heading}</Heading>
        <CardList>
          {items &&
          items.map((item, key) => {
            return itemHandler(item, key);
          })
          }
          {!items &&
          <p>Unable to find any items</p>
          }
        </CardList>
      </Content>
    </CardContainerComponent>
  )
}

export default CardContainer