import React from "react"
import ReactDOM from 'react-dom/client';

function Header(){
    return(
        <header className="header">
            <div className="header__box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/1280px-Airbnb_Logo_Bélo.svg.png" width={200} className="header__logo"></img>
            </div>
        </header>
    )
}

export default Header;