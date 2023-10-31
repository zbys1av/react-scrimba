import React from "react"
import ReactDOM from 'react-dom/client';

import logo from './images/react-icon.png';

function Header(){
    return(
        <header className='header section'>
            <nav className='header__nav'>
                <div className="header__logo-section">
                    <img src={logo} width={50} className='header__logo' alt='logo'></img>
                    <p className="header__logo-text">React</p>
                </div>
                <ul className='header__list'>
                    <li>React Course (Scrimba)- Project 1</li>
                </ul>
            </nav>
            {/* <div className='header__background'></div> */}
        </header>
    )
}

export default Header;