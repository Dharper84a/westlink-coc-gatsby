import * as React from 'react';
import { createPortal } from 'react-dom';

import * as Styled from './styles';

const Modal = (props) => {
    return createPortal(
        <>
            <Styled.Overlay onClick={props?.onOverlayClick} />
            <Styled.Modal className={props.modalType || 'normal'}>
                {props.children}
            </Styled.Modal>
        </>
        ,
        document.getElementById('modal')
    )
}

export default Modal