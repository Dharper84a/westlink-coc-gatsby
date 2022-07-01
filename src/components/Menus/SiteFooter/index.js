import React from 'react';
import { Link } from 'gatsby';

import { Menu, MenuList, MenuItem } from './styles';

const MenuSiteFooter = () => {

  return(
    <Menu>
      <MenuList>
        <MenuItem>
          <Link to="/donate" title="Westlink Church of Christ donation page">
            Donate
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/contact" title="Westlink Church of Christ contact page">
            Contact
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/facilities" title="Westlink Church of Christ facilities and reservation page">
            Facilities
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuSiteFooter;