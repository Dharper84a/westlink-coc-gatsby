import styled from 'styled-components'

export const DividedSidesComponent = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  justify-content: space-between;
  height: calc(100vh - ${({theme}) => theme.layout.site.header.height});
  min-height: 30rem;
  @media (orientation: portrait) {
    max-width: 100vh;
  }
  @media (orientation: portrait) and (min-width: 768px) {
    max-height: 50vh;
  }
  @media (max-aspect-ratio: 4/3) or (min-aspect-ratio: 16/9){
    max-height: 70vh;
  }
  @media ${({theme}) => theme.devices.iphonesUp} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({theme}) => theme.devices.ipadsUp} {
    grid-template-columns: 4fr 6fr;
    &.reversed {
      grid-template-columns: 6fr 4fr;
    }
  }
  @media ${({theme}) => theme.devices.smallMacsUp} {
    grid-template-columns: 1fr 2fr;
    &.reversed {
      grid-template-columns: 2fr 1fr;
    }
  }
`
export const Content = styled.div`
  position: relative;
  padding: ${({theme}) => theme.layout.site.main.padding.all};
  padding-top: 4rem;
`

export const Left = styled.div`
  order: 2;
  position: relative;
  height: 100%;
  min-height: 50vh;
  background: ${({theme}) => theme.colors.pastelGreen};
  ${Content} {
    display: grid;
    grid-template-columns: 1fr;
    align-content: flex-start;
    max-width: 550px;
    height: 100%;
    padding: 6vh 6vw 2vh;
  }
  @media ${({theme}) => theme.devices.iphonesUp} {
    order: 1;
    ${Content} {
      align-content: flex-start;
      padding-top: 2rem;
      padding-right: 4rem;
      padding-left: 18%;
    }
  }
  @media ${({theme}) => theme.devices.ipadsUp} {
    ${Content} {
      padding-top: 3rem;
    }
  }
`

export const Right = styled.div`
  order: 1;
  position: relative;
  height: calc(50vh - ${props => props.theme.layout.site.header.height});
  background-color: ${({theme}) => theme.colors.veryLightGray};
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 2rem 5rem -1rem rgba(0,0,0,0.9);
  @media ${({theme}) => theme.devices.iphonesUp} {
    order: 2;
    height: 100%;
    box-shadow: inset 5rem 0 40rem rgba(0,0,0,0.9);
  }
  @media ${({theme}) => theme.devices.ipadsUp} {
    order: 2;
    height: 100%;
    box-shadow: inset 5rem 0 40rem rgba(0,0,0,0.9);
  }
`
export const BorderAccent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  @media ${({theme}) => theme.devices.iphonesUp} {
    width: 1rem;
    background-image:
      linear-gradient(45deg, ${({theme}) => theme.colors.pastelGreen} 50%, transparent 50%),
      linear-gradient(-225deg, ${({theme}) => theme.colors.pastelGreen} 50%, transparent 50%);
    background-position:
      top right, top right,
      bottom right, bottom right;
    background-size: 1rem 1rem;
    background-repeat: repeat-y;
  }
`

export const Copy = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.45;
  ${({theme}) => theme.styles.text.lineLimit.three};
  @media ${({theme}) => theme.devices.iphonesUp} {
    ${({theme}) => theme.styles.text.lineLimit.zero}; 
  }
`

export const Heading = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-weight: 300;
  line-height: 1.25;
  text-decoration: underline;
  ${({theme}) => theme.styles.text.lineLimit.two};
  @media ${({theme}) => theme.devices.iphonesUp} {
    ${({theme}) => theme.styles.text.lineLimit.zero};
  }
`
export const Footer = styled.footer`
  margin-top: 1.5rem;
  button {
    width: fit-content;
    margin-top: 0.5rem;
    font-size: clamp(0.875rem, 5vw, 1rem);
  }
  a {
    color: ${({theme}) => theme.colors.veryLightGray};
    &:visited {
      color: ${({theme}) => theme.colors.veryLightGray};
    }
    &:hover {
      color: ${({theme}) => theme.colors.charcoal};
    }
  }
  @media ${({theme}) => theme.devices.ipadsUp} {
    
  }
  @media ${({theme}) => theme.devices.mediumMacsUp} {
    display: flex;
    align-items: center;
    gap: 1rem;
    button {
      margin-top: 0;
    }
  }
`

