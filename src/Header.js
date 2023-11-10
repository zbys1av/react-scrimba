import React from "react"
import ReactDOM from 'react-dom/client';


function Header(){
    return(
        <header className="header">
            <div className="header__box">
                <div className="header__logo-section">
                    <img className="header__logo" width={50} alt="troll face" src="https://freepngimg.com/thumb/face/98396-comics-troll-face-rage-free-clipart-hq.png"/>
                    <span className="header__logo-text">Meemees</span>
                </div>
                <p className="header__text">
                    React course - project 3
                </p>
            </div>
        </header>
    )
}

export default Header;