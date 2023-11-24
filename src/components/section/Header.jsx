import React from 'react'

import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {

    return (
        <header id='header' role='banner'>
                <h1 className='header__logo'>
                    <a href='/'>
                        <em aria-hidden='true'></em>
                        <span>portfolio<br />youtube</span>
                    </a>
                </h1>

                <Menu />
                <Sns />
            

        </header>
    )
}

export default Header