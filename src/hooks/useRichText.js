import * as React from 'react';

const initialState = {
  rawData: null,
  stringifiedData: null,
  jsonData: null,
  isReady: false,
  isRunning: false,
  nodeList: []
}

const reducer = (state, action) => {
  let _stringifiedData = null;
  let _jsonData = null;
  let _isReady = false;

  const build = (content) => {
    if(typeof content === 'object') {
      const items = content.map((item) => {
        console.log('build/item', item);
        return {
          nodeType: item.nodeType,
          value: item?.value || null,
          children: build(item?.content)
        }
      })
      
      return items;
    } else {
      return null;
    }
  }
  switch(action?.type) {
    case 'INIT':
      try {
        _stringifiedData = action.data.raw || action.data;
        if(!_stringifiedData) throw "No content to parse"
  
        _jsonData = JSON.parse(_stringifiedData);
        console.log(_jsonData);
        _isReady = true;
      }catch(e) {
        console.debug(e.message);
      } finally {
        return {
          ...state,
          rawData: action.data?.raw || null,
          stringifiedData: _stringifiedData,
          jsonData: _jsonData,
          isReady: _isReady
        }
      }
    case 'RUN':
      const buildResult = build(state.jsonData?.content);
      console.log('buildResult', buildResult);
      return {
        ...state,
        nodeList: buildResult,
        isRunning: true,
      };
    default:
      return state;
  }
}

export default function useRichText(data) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [resolvedHtml, setResolvedHtml] = React.useState(null);


  React.useEffect(() => {
    // initialize the reducer and start parsing the data
    dispatch({type: 'INIT', data: data})
    return () => {}
  }, [data])

  React.useEffect(() => {
    console.log('state', state);
    if(state.isReady && !state.isRunning) {
      dispatch({type: 'RUN'})
    }
  }, [state])
  return ({
    html: resolvedHtml,
    nodeList: state.nodeList,
  }
  )
}