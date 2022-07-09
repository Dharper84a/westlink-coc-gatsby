import styled from 'styled-components';

export const Header = styled.header`
    ${({theme}) => theme.header};
    background: ${({theme}) => theme.colors.pastelGreen};
    border-radius: 0 0 0.25rem 0.25rem;
`
export const Title = styled.span`
    font-family: ${({theme}) => theme.typography.family.primary};
    font-size: ${({theme}) => theme.getClamp(22, 36)};
    font-weight: 500;
    
`

export const Navigation = styled.nav`
    
`