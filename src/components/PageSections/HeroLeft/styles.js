import styled from 'styled-components';

export const _HeroLeft = styled.div`
  position: relative;

  @media ${props => props.theme.devices.ipadsUp} {
    /* margin: 2rem 0;
    padding: 4rem 0; */
  }
`

export const _Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: -12.5rem;
  padding: 0 3%;
  @media ${props => props.theme.devices.iphonesUp} {
    justify-content: flex-start;
    /* padding: 0 6%; */
    /* justify-content: flex-start;
    margin-top: -12.5rem;
    margin-left: 4rem;
    padding-right: 4rem; */
  }
`

export const _Image = styled.div`
`

export const _Copy = styled.div`
  max-width: 70rem;
  min-height: 225px;
  padding: 0 3% 1rem;
  background: ${props => props.theme.colors.white};
  border-radius: 0.5rem;
  @media ${props => props.theme.devices.iphonesUp} {
    width: 75%;
  }
`

export const _Heading = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
`

export const _Content = styled.p``

export const _Spacer = styled.div``
