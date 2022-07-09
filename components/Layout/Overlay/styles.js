import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    z-index: ${({theme}) => theme.layers.overlay};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.25);
`

export const Modal = styled.div`
    position: absolute;
    z-index: ${({theme}) => theme.layers.modal};
    &.normal {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 768px;
        max-width: 90%;
        padding: 1rem;
        background: ${({theme}) => theme.colors.veryLightGray};
        border-radius: 0.5rem;
    }
    &.rightDrawer {
        top: 0;
        right: 0;
        /* float: right; */
        width: 100%;
        max-width: 480px;
        height: 100vh;
        padding: 1rem;
        background: ${({theme}) => theme.colors.veryLightGray};
    }

`