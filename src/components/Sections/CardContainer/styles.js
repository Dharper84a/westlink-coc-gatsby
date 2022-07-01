import styled from 'styled-components'

export const CardContainerComponent = styled.section`
  margin: 4rem 0;
`

export const Content = styled.div`

`
export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
`
export const Heading = styled.h2`
  margin: 0 0 1.5rem 0;
  font-size: clamp(1.5rem, 2vw, 2.5rem);
  font-weight: 300;
  line-height: 1.25;
  text-decoration: underline;
`