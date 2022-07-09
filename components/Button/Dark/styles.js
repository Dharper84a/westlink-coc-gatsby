import styled from 'styled-components';

export const DarkButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    background: ${({theme}) => theme.colors.matteBlack};
    color: ${({theme}) => theme.colors.lightText};
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    svg {
        padding-left: 0.5rem;
    }
`