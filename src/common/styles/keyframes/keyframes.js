import { keyframes } from "styled-components"

/**
 * Translation Related Effects
 */
export const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`
export const slideOutRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`
export const focusIn = keyframes`
  0%{
    transform: scale(1);
  }
  80% {
    transform: scale(1.07);
  }
  100% {
    transform: scale(1.05);
  }
`
export const focusOut = keyframes`
  0%{
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

/**
 * Opacity Related Effects
 */
export const fadeIn = keyframes`
 0% {
   opacity: 0;
 }
 100% {
   opacity: 1;
 }
`
export const fadeOut = keyframes`
 0% {
   opacity: 1;
 }
 100% {
   opacity: 0;
 }
`

/**
 * Container Dimension Change Effects
 */
export const linkHover = keyframes`
  0% {
    width: 30%;
  }
  100% {
    width: 55%;
  }
`

export const linkHoverOut = keyframes`
  0% {
    width: 55%;
  }
  100% {
    width: 30%;
  }
`

export const FxSubMenu = keyframes`
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`
