import styled from 'styled-components'

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const MenuItem = styled.li`
    a {
        color: ${({theme}) => theme.colors.lightText};
        font-size: ${({theme}) => theme.typography.sizes.small.clamp};
        &:visited {
            color: ${({theme}) => theme.colors.lightText};
        }
        &:hover {
            color: ${({theme}) => theme.colors.pastelGreen};
        }
    }
`
