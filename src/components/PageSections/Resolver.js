import * as React from 'react';

// Section Components
import HeroLeft from './HeroLeft';

const SectionResovler = ({sections}) => {
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    if(typeof sections === 'object') {
      const _list = sections.map((section, key) => {
        const sectionType = section.sys.contentType.sys.id;
        switch(sectionType) {
          case 'sectionHeroLeft':
            return <HeroLeft {...section} key={key} />
          default:
            return <></>
        }
      })
      setList(_list);
    } else {
      setList(false); // we cannot get a list
    }

    return () => {}
  }, [sections])

  return (
    <>
    {list &&
      list.map((section) => {
        return section;
      })
    }
    {list === null && 
      <div>Loading...</div>
    }
    {list === false &&
      <div>Unable to parse page data.</div> 
    }
    </>
  )
  

}

export default SectionResovler