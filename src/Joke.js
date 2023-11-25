import React, {useState} from "react"           
import ReactDOM from 'react-dom/client';

import jokesData from "./jokesData";
import Jokes from "./Jokes";

function Joke(props){
    return (
        <div className="joke">
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
        </div>
    )
}

export default Joke;