import styled, {keyframes} from 'styled-components';

const fxHeart = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.15);
    }
`

export const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    ${({theme}) => theme.footer};
    grid-template-columns: min-content 1fr;
    gap: 1rem;
    justify-content: space-between;
    background: ${({theme}) => theme.colors.matteBlack};
    border-radius: 0.25rem 0.25rem 0 0;
    @media ${({theme}) => theme.device.ipads} {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`

export const Navigation = styled.nav``

export const Legal = styled.div`
    color: ${({theme}) => theme.colors.lightText};
    font-size: ${({theme}) => theme.typography.sizes.small.clamp};
    line-height: 1.5;
    text-align: right;
    span {
        &:last-of-type {
            padding-left: 0.5rem;
        }
    }
    svg {
        color: ${({theme}) => theme.colors.pink};
        animation: ${fxHeart} 2s ease-in-out infinite;
    }
    @media ${({theme}) => theme.device.iphones} {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
        span {
            &:last-of-type {
                padding-left: 0;
            }
        }
    }
    @media ${({theme}) => theme.device.ipads} {
        text-align: left;
    }
`