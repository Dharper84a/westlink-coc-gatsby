import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

// Components
import EventCard from '../Cards/Slides/Event';

// Styles
import { SliderComponent } from './styles';

const Slider = (props) => {

  const slides = props.slides ? props.slides : false;

  const slideHandler = (slide, key) => {
    switch(props.type) {
      case 'event':
        return (
          <EventCard {...slide} key={key} />
        )
      default: return <></>
    }
  }
  return(
    <SliderComponent>
      {slides &&
      slides.map((slide, key) => {
        return slideHandler(slide, key);
      })
      }
      {!slides &&
      <p>not slides to show</p>
      }
    </SliderComponent>
  )
}

export default Slider;