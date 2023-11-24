import React from 'react'

import Menu from '../header/Menu';
import Sns from '../header/Sns';
import Logo from '../header/Logo';

const Header = () => {

    return (
        <header id='header' role='banner'>
                <Logo />
                <Menu />
                <Sns />
        </header>
    )
}

export default Header