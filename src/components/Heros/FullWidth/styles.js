import styled from 'styled-components';

export const Hero = styled.div`
  position: relative;
  width: 100%;
  max-width: 120rem;
  height: ${props => props.heroHeight}px;
  min-height: 300px;
  background-color: ${({theme}) => theme.colors.veryLightGray};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: ${props => props.heroYPos}%;
  background-size: cover;
`