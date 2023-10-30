import React from "react"
import ReactDOM from 'react-dom/client';

import logo from './images/react-icon.png';

function Header(){
    return(
        <header className='header'>
            <nav className='header__nav'>
                <img src={logo} width={50} className='header__logo' alt='logo'></img>
                <ul className='header__list'>
                    <li>Sign Up</li>
                    <li>Sign In</li>
                </ul>
            </nav>
            {/* <div className='header__background'></div> */}
        </header>
    )
}

export default Header;