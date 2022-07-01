import styled from 'styled-components';

export const Menu = styled.nav``

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media ${({theme}) => theme.devices.iphonesUp} {
    flex-wrap: nowrap;
  }
`

export const MenuItem = styled.li`
  width: 100%;
  text-align: center;
  a {
    color: ${({theme}) => theme.colors.veryLightGray};
    font-size: 0.9rem;
  }
  @media ${({theme}) => theme.devices.iphonesUp} {
    width: auto;
    text-align: left;
  }
`