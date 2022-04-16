import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import {Link} from 'gatsby'

import * as styles from "./UpcomingEvents.module.scss"

const UpcomingEvents = () => {
  const events = [
    {
      title: "Community Clean Up '22",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis ex nec augue cursus, quis fringilla enim hendrerit. Quisque sit amet ligula nulla.",
      image: 'https://via.placeholder.com/300x150?text=FPO+Event+Thumb',
      url: '/events/community-clean-up-2022'
    },
    {
      title: "Togetherness",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis ex nec augue cursus, quis fringilla enim hendrerit. Quisque sit amet ligula nulla.",
      image: 'https://via.placeholder.com/300x150?text=FPO+Event+Thumb',
      url: '/events/togetherness-2022'
    },
    {
      title: "Church Community Bake",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis ex nec augue cursus, quis fringilla enim hendrerit. Quisque sit amet ligula nulla.",
      image: 'https://via.placeholder.com/300x150?text=FPO+Event+Thumb',
      url: '/events/church-community-bake-2022'
    }
  ]

  console.log(events);
  return (
    <section className={styles.container}>
      <h2>Upcoming Events</h2>
      <div className={styles.grid}>
        {events.length > 0 &&
          events.map((event,key) => {
            return (
              <div className={styles.gridItem} key={key}>
                <div className={styles.image}>
                  {/* <StaticImage src={event.image} alt="" /> */}
                  <GatsbyImage image={getImage(event.image)} alt="" />
                </div>
                {/* <GatsbyImage
                  image={event.image}
                /> */}
                
                <h3>{event.title}</h3>
                <p>{event.excerpt}</p>
                <Link to={event.url}>Details</Link>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default UpcomingEvents
