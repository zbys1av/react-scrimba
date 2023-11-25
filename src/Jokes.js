import React, {useState} from "react"           
import ReactDOM from 'react-dom/client';

import jokesData from "./jokesData";
import Joke from "./Joke";

function Jokes(){

    const jokeElements = jokesData.map(joke => (
        <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    ))
    return (
        <div className="jokes">
            {jokeElements}
        </div>
    )
}

export default Jokes;