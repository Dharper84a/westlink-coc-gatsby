import React, {useEffect, useState} from 'react';

const ExcerptFromRichText = ({richText}) => {
  const [excerpt, setExcerpt] = useState('Loading...');

  const textObject = JSON.parse(richText.raw);

  const getFirstParagraphContent = (content) => {
    var paragraph = '';

    for(var i = 0; i <= content.length; i++) {
      if(content[i].nodeType === 'paragraph') {
        paragraph = content[i].content[0].value;
        break;
      }
    }
   
    return paragraph;
  }

  const getExcerpt = (content) => {
    const paragraph = getFirstParagraphContent(content);

    if(paragraph.length <= 256) return paragraph;

    return paragraph.substring(0, 256) + '...';

  }
  
  useEffect(() => {
    setExcerpt(getExcerpt(textObject.content))
  }, [])
  return (
    <p>{excerpt}</p>
  )
}

export default ExcerptFromRichText;