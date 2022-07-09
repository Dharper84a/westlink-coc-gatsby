import styled from 'styled-components';

export const Layout = styled.div`
    ${({theme}) => theme.container};
    min-height: 100vh;
`