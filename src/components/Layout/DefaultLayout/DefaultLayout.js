import React from 'react';

import ContentfulRichText from '../../ContentTypes/RichText';
import { ContentWithMediaColumn, ContentWithMediaGrid } from '../../../templates/Templates';
import CategoryAndTitle from '../../CategoryAndTitle/CategoryAndTitle';
import VerticleHeader from '../../Headers/Verticle/VerticleHeader';

const DefaultLayout = (props) => {
  const headerType = props.headerType ? props.headerType : 'verticle';

  return (
    <ContentWithMediaColumn>
      <CategoryAndTitle category="People" title={props.title} />
      <ContentWithMediaGrid>
        {headerType === 'verticle' && <VerticleHeader images={props.image} /> }
        <ContentfulRichText richText={props.pageContent} />
      </ContentWithMediaGrid>
    </ContentWithMediaColumn>
  );
  
}

export default DefaultLayout;