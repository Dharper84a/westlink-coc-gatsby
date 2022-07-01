import styled, {css} from 'styled-components'

const defaultBorderRadius = `${({theme}) => theme.layout.site.default.borderRadius}`;
export const MediaAndCopyComponent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({theme}) => theme.layout.site.default.gap};
  border-radius: ${({theme}) => theme.layout.site.default.borderRadius};
  border: 1px solid #D7DBDD;
`

export const Content = styled.div`
  
`

export const Media = styled.div`
  border-radius: 
    ${({theme}) => theme.layout.site.default.borderRadius} 
    0 
    0 
    ${({theme}) => theme.layout.site.default.borderRadius};
  img {
    border-radius:
      ${({theme}) => theme.layout.site.default.borderRadius} 
      0 
      0 
      ${({theme}) => theme.layout.site.default.borderRadius};
  }
`
export const Heading = styled.h2``
export const Copy = styled.p`
  padding: 1rem 1rem 1rem 0;
`