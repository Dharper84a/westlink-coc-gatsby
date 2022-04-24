import React from 'react';

// Template
import { ContentWithMediaColumn, ContentWithMediaGrid } from '../../templates/Templates';

// Components
import CategoryAndTitle from '../CategoryAndTitle/CategoryAndTitle';
import VerticleHeader from '../Headers/Verticle/VerticleHeader';
import PeopleContent from './PeopleContent/PeopleContent';

const People = (page) => {

  console.log(page)
  const people = {
    title: page.title,
    content: page.topContent,
    featuredPerson: page.featuredPerson,
    people: page.people,
  };

  return (
    <>
      
      <ContentWithMediaColumn>
        <CategoryAndTitle category="People" title={page.title} />
        <ContentWithMediaGrid>
          <VerticleHeader images={page.image} />
          <PeopleContent {...people} />
        </ContentWithMediaGrid>
      </ContentWithMediaColumn>
    </>
  )
}

export default People;