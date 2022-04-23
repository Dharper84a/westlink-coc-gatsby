import React, {useEffect, useState, useCallback} from 'react';

const ExcerptFromRichText = ({richText}) => {
  const [excerpt, setExcerpt] = useState('Loading...');

  const textObject = JSON.parse(richText.raw);

  const getFirstParagraphContent = useCallback((content) => {
    var paragraph = '';

    for(var i = 0; i <= content.length; i++) {
      if(content[i].nodeType === 'paragraph') {
        paragraph = content[i].content[0].value;
        break;
      }
    }
   
    return paragraph;
  },[]);

  const getExcerpt = useCallback((content) => {
    const paragraph = getFirstParagraphContent(content);

    if(paragraph.length <= 256) return paragraph;

    return paragraph.substring(0, 256) + '...';

  }, [getFirstParagraphContent]);
  
  useEffect(() => {
    setExcerpt(getExcerpt(textObject.content))
  }, [getExcerpt, textObject.content])
  return (
    <p>{excerpt}</p>
  )
}

export default ExcerptFromRichText;