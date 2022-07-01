import styled from 'styled-components'

export const InfoAndResourcesComponent = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 1.5rem; */
  align-items: stretch;
  @media ${props => props.theme.devices.ipadsUp} {
    grid-template-columns: 4fr 2fr;
  }
`
export const Content = styled.div`
  position: relative;
  padding: ${({theme}) => theme.layout.site.main.padding.all};
  padding-top: 4rem;
  padding-bottom: 4rem;
`
export const Left = styled.div`
  background: ${props => props.theme.colors.pastelGreen};
  ${Content} {
    padding-left: 9%;
  }
`
export const Right = styled.div`
  background: ${props => props.theme.colors.veryLightGray};
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

export const SubHeading = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: clamp(1.25rem, 2vw, 1.85rem);
  font-weight: 300;
  line-height: 1.25;
  text-decoration: underline;
  ${({theme}) => theme.styles.text.lineLimit.two};
  @media ${({theme}) => theme.devices.iphonesUp} {
    ${({theme}) => theme.styles.text.lineLimit.zero};
  }
`
export const Copy = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.45;
`
export const LinksContainer = styled.div`
  
`
export const LinkList = styled.ul`
  margin-left: 0.5rem;
  
`

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
  font-size: 1.35rem;
  svg {
    transition: transform 0.33s ease-in-out;
    margin-right: 1rem;
  }
  a {
    &:hover {
      text-decoration: underline;ga
    }
    &:after {
      display: none;
    }
  }
  &:hover {
    svg {
      
      transform: translateX(0.35rem);
    }
  }
`