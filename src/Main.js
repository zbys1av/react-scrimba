import React, {useState} from "react"           //IMPORTANT {useState} is made for page to update after some changes 
import ReactDOM from 'react-dom/client';

import memeBase from "./memeBase";

function Main(){

    // const [memeUrl, newMemeUrl] = useState(memeBase.data.memes[Math.floor(Math.random()*memeBase.data.memes.length)].url);
    const [memeUrl, newMemeUrl] = useState({
        topText: "",
        bottomText: "",
        randomImage: (memeBase.data.memes[Math.floor(Math.random()*memeBase.data.memes.length)].url)
    })
    const [allMemeImages, setAllMemeImages] = useState(memeBase);

    function getImage(){
        const memesArray = memeBase.data.memes;
        const randomMeme = Math.floor(Math.random()*memesArray.length);
        const memeLink = memesArray[randomMeme].url;
        // newMemeUrl(memesArray[randomMeme].url);
        newMemeUrl (meme => {
            return{
                ...meme,
                randomImage: memeLink
            }
        })
    }

    const [text, setText] = useState("NOW !")

    function meow(){
        if (text === "NOW !"){
            setText ("MEOW!" )
        } else {
            setText("NOW !")
        }
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


                <button onClick={getImage} onMouseEnter={meow} onMouseLeave={meow} className="main__button">
                    Get meme. {text}
                </button>
                <img src={memeUrl.randomImage} alr="meme" className="main__image">
                </img>



            </div>
        </div>
    )
}

export default Main;