import * as React from 'react';
import Link from 'next/link';

import * as Styled from './styles';

const Menu = (props) => {
    return (
        <Styled.Menu>
            <Styled.MenuItem>
                <Link href="/donate" title="Donate to Westlink Church of Christ">
                    <a>
                        Donate
                    </a>
                </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
                <Link href="#" title="View and reserve use of Westlink's facilities">
                    <a>
                        Facilities
                    </a>
                </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
                <Link href="#" title="Get in touch with Westlink Church of Christ">
                    <a>
                        Contact
                    </a>
                </Link>
            </Styled.MenuItem>
        </Styled.Menu>
    )
}

export default Menu;