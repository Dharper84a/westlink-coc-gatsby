import * as React from 'react';

const RichTextResolver = ({data}) => {
  const [resolvedHtml, setResolvedHtml] = React.useState(null);

  console.log(data)

  React.useEffect(() => {
    try {
      const stringifiedData = data?.raw || null;
      if(!stringifiedData) throw "No content to parse"

      const jsonData = JSON.parse(stringifiedData);
      console.log(jsonData);
    }catch(e) {
      console.debug(e.message);
    }
    
    return () => {}
  }, [data])
  return (
    <>
    {resolvedHtml ? (
      <div>show resolved html</div>
    ) : (
      <></>
    )}
    </>
  )
}

export default RichTextResolver