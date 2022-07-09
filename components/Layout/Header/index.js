import * as React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import DarkButton from '../../Button/Dark';
import Modal from '../Overlay';
import * as Styled from './styles';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleDrawer = () => {
        console.log('Toggle Drawer');
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <Styled.Header>
            <Styled.Title>
                Website Title Here
            </Styled.Title>
            <Styled.Navigation>
                <DarkButton name="Menu" icon="faBars" onClick={toggleDrawer} />
            </Styled.Navigation>
        </Styled.Header>
        {isMenuOpen &&
        <Modal onOverlayClick={toggleDrawer} modalType="rightDrawer">
            <div>TEST</div>
        </Modal>
        }
        </>
    )
}

export default Header;