import * as React from 'react';
import * as Styled from './styles';

// Components
import Header from './Header';
import Footer from './Footer';
import Content from './Content';



const Layout = (props) => {
    return (
        <Styled.Layout>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </Styled.Layout>
    )
}

export default Layout;