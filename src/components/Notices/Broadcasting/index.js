import React, { useState } from 'react';

// Components

// Styles
import { NoticeContainer } from './styles';

const BroadcastingNotice = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <>
    {isEnabled &&
    <NoticeContainer>
      BroadcastingNotice
    </NoticeContainer>
    }
    </>
  )
}

export default BroadcastingNotice;
