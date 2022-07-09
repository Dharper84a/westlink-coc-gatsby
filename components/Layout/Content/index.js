import * as React from 'react';
import * as Styled from './styles';

const Content = (props) => {
    return (
        <Styled.Content>
            {props.children}
        </Styled.Content>
    )
}

export default Content;