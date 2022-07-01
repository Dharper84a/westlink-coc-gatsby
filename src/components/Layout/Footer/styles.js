import styled, {css} from 'styled-components';

const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Footer = styled.footer`
  /* position: absolute; */
  left: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({theme}) => theme.layout.site.footer.padding.all};
  padding-top: 1rem;
  background: ${({theme}) => theme.colors.charcoal};
  @media ${({theme}) => theme.devices.iphonesUp} {
    grid-template-columns: 1fr 1fr;
    height: ${({theme}) => theme.layout.site.footer.height};
    padding-top: ${({theme}) => theme.layout.site.footer.padding.top};
  }
`
export const Left = styled.div`
  ${Flex}
  @media ${({theme}) => theme.devices.iphonesUp} {
    justify-content: space-between;
  }
`

export const Right = styled.div`
  ${Flex}
  svg {
    font-size: 1rem;
  }
  @media ${({theme}) => theme.devices.iphonesUp} {
    justify-content: flex-end;
  }
`
export const Legal = styled.span`
  padding-right: 1.5rem;
  color: ${({theme}) => theme.colors.veryLightGray};
  font-size: 0.75rem;
`