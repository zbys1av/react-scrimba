import React, {useState} from "react"           
import ReactDOM from 'react-dom/client';

import jokesData from "./jokesData";
import Jokes from "./Jokes";

function Joke(props){

    const [isShow, setIsShow] = useState(false)
    const [buttonText, setButtonText] = useState("Show")

    function showLine(){
        setIsShow(show => !show);
        setButtonText(text => text === "Show" ? text = "Hide" : text = "Show");
    }

    return (
        <div className="jokes">
            <div className="jokes__box">
                {props.setup && <h3 className="jokes__setup">{props.setup}</h3>}
                <div className="jokes__punchline-section">
                    {isShow ? <p className="jokes__punchline">{props.punchline}</p> : <p className="jokes__punchline jokes__punchline--hidden">Nothing is here</p>}
                    <button onClick={showLine} className="jokes__button">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default Joke;