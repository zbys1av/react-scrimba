import React, {useState} from "react"           
import ReactDOM from 'react-dom/client';


function Message(){
    const [message, setMessage] = useState(["a", "b", "c"]);

    return(
        <div className="message">
            <div className="message__box">
                {message.length === 0 ? <p className="message__text"></p> : <p className="message__text">You have {message.length} unread messages!</p>}
                {/* if LENGTH > 0 we will render if it is < than we will do nothing  */}
                {/* {message.length > 0 && <p className="message__text">You have {message.length} unread messages!</p>}  */}
            </div>
        </div>
    )
}

export default Message;