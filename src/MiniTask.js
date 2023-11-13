import React, {useState} from "react" 
import ReactDOM from 'react-dom/client';


function MiniTask(){
    const [chooseButton, setChooseButton] = useState(true);

    function select(){
        setChooseButton(value => !value); //take value (true in this case) and make it reversed (false in this case)
    }

    return(
        <div className="choose">
            <div className="choose__box">
                <div className="choose__button-box">
                    <h2 className="choose__title">Do you like this meme?</h2> 
                    <h1 onClick={select} className="choose__button">{chooseButton ? "Yes" : "No"}</h1>
                </div>
            </div>
        </div>
    )

}

export default MiniTask;