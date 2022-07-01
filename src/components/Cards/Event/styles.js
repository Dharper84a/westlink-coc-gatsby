import styled from 'styled-components'

export const EventCardComponent = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%; //18.75rem;
  transition: box-shadow 0.25s ease-in-out;
  border-radius: 1rem 1rem 0.25rem 0.25rem;
  &:hover {
    box-shadow: -1px 0 1px rgba(0,0,0,0.05),
    -2px 0 2px rgba(0,0,0,0.05),
    -4px 0 4px rgba(0,0,0,0.05),
    -8px 0 8px rgba(0,0,0,0.05),
    -16px 0 24px rgba(0,0,0,0.05);
  }

  a {
    color: ${({theme}) => theme.colors.charcoal};
    &:after {
      display: none !important;
    }
  }
`;

export const EventImage = styled.figure`
  img {
    border-radius: 1rem 1rem 0 0;
  }
`;

export const Content = styled.div`
  padding: 0 1rem 1rem;
  background: #F8F9F9;
  border: 1px solid #D7DBDD;
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
`
export const EventHeading = styled.h2`
  margin-top: 0;
  padding-top: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; 
`;

export const EventCaption = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; 
`;
