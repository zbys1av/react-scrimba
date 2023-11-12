import React, {useState} from "react"           //IMPORTANT {useState} is made for page to update after some changes 
import ReactDOM from 'react-dom/client';

import memeBase from "./memeBase";

function Main(){

    const [memeUrl, newMemeUrl] = useState(memeBase.data.memes[Math.floor(Math.random()*memeBase.data.memes.length)].url);

    function getImage(){
        const memesArray = memeBase.data.memes;
        const randomMeme = Math.floor(Math.random()*memesArray.length);
        newMemeUrl(memesArray[randomMeme].url);
    }

    return(
        <div className="main">
            <div className="main__box">
                <div className="main__inputs">
                    <input className="main__input" type="text" placeholder="">
                    </input>
                    <input className="main__input" type="text">
                    </input>
                </div>



                <button onClick={getImage} className="main__button">
                    Get meme. NEOW!
                </button>
                <img src={memeUrl} alr="meme" className="main__image">
                </img>



            </div>
        </div>
    )
}

export default Main;