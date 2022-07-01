import styled from 'styled-components';
import defaultCss from '../buttonDefaults';

export const Button = styled.button`
  ${({theme}) => theme.styles.button.defaults};
  &:hover {
    ${({theme}) => theme.styles.button.hoverDefaults};
  }
  // Types
  &.default {}
  &.thin {
    padding: 0.125rem 0.2rem;
  }
  &.small {
    font-size: 0.75rem;
  }
  &.solid {
    border-radius: 4px;
    letter-spacing: 0;
    &.light {
      ${({theme}) => theme.styles.button.solid.light.normal};
    }
    &:hover {
      &.light{
        ${({theme}) => theme.styles.button.solid.light.hover};
      }
    }
  }
  &.transparent {
    border-radius: 4px;
    letter-spacing: 0;
    &.light {
      ${({theme}) => theme.styles.button.transparent.light.normal};
    }
    &:hover {
      &.light{
        ${({theme}) => theme.styles.button.transparent.light.hover};
      }
    }
  }

  &.special {
    padding: 0 0.25rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.pink};
    opacity: 0.75;
    span {
      padding-right: 0;
    }
    &:hover {
      background: ${({theme}) => theme.colors.gradients.special};
      color: ${({theme}) => theme.colors.veryLightGray};
      opacity: 1;
    }
  }

`