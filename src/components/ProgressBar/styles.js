import styled, {keyframes} from "styled-components"

const fxProgress = keyframes`
  0%, 100% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
`
export const _ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background: #efefef;
`

export const ProgressValue = styled.div`
  width: 0;
  height: 5px;
  background: rgb(51, 153, 255);
  background: linear-gradient(
    45deg,
    rgba(51, 153, 255, 1) 0%,
    rgba(253, 51, 255, 1) 100%
  );
  animation: ${fxProgress} 3s infinite;
  &.undetermined {
    animation: ${fxProgress} 3s infinite;
  }
`
