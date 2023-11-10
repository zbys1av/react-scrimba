import React from "react"
import ReactDOM from 'react-dom/client';

function Main(){
    return(
        <div className="main">
            <div className="main__box">
                <div className="main__inputs">
                    <input className="main__input" type="text" placeholder="">
                    </input>
                    <input className="main__input" type="text">
                    </input>
                </div>
                <button className="main__button">Get meme. NEOW!</button>
            </div>
        </div>
    )
}

export default Main;