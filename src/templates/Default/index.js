import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import * as styles from './styles.module.scss';

// Templates
import Website from '../Website';
import Footer from '../Footer';
import Header from '../Header';


const TemplateDefault = (props) => {
  return (
    <Website
      title={props.title}
      description={props.description}
      image={props.image}
    >
      <Header />
      <main className={styles.page}>
        {props.children}</main>
      <Footer />
    </Website>
    
  )
}

const FeaturedImage = (props) => {
  return (
    <div className={styles.featuredImage}>
      <GatsbyImage image={props.image} alt="" layout="fullWidth" />
      {props.overlay && <h1>{props.overlay}</h1>}
    </div>
  )
}

const PageContent = (props) => {
  return (
    <section className={styles.pageContent}>
      <p>{props.children}</p>
    </section>
  )
}


export {TemplateDefault, FeaturedImage, PageContent};