import styled, {css} from 'styled-components';
import defaultCss from '../buttonDefaults';

const Shadow = css`
  box-shadow: -1px 0 1px rgba(0,0,0,0.05),
      -2px 0 2px rgba(0,0,0,0.05),
      -4px 0 4px rgba(0,0,0,0.05),
      -8px 0 8px rgba(0,0,0,0.05),
      -16px 0 24px rgba(0,0,0,0.05);
`

export const Button = styled.button`
  ${defaultCss}
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  svg {
    color: ${({theme}) => theme.styles.button.iconColor};
    font-size: 1.25rem;
    transition: transform 0.15s linear;
  }
  

  // Button Type Styles
  &.default {}
  &.shadow {
    ${Shadow}
  }
  &.hover-shadow {
    &:hover {
      ${Shadow}
    }
  }
  &.slim {
    padding: 0.125rem 0.2rem;
  }
  &.solid {
    padding: 0.5rem 0.75rem;
    background: ${({theme}) => theme.styles.button.solid.bg};
    &:hover {
      border-color: ${({theme}) => theme.colors.veryLightGray};
      background: ${({theme}) => theme.colors.mediumGreen};
    }
  }
  &.hover-rotate {
    &:hover {
      svg {
        transform: rotate(180deg);
        transition: transform 0.35s linear;
      }
    }
  }
  &.hover-rotate-tilt {
    &:hover {
      svg {
        transform: rotate(25deg);
        transition: transform 0.15s linear;
      }
    }
  }
  &.red {
    background: ${({theme}) => theme.colors.paleRed};
    &:hover {
      background: ${({theme}) => theme.colors.paleRed};
    }
  }
`