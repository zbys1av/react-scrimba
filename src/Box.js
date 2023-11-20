import React, {useState} from "react"
import ReactDOM from 'react-dom/client';

import boxesData from "./boxesData";

function Box(props){

    const [on, setOn] = useState(props.on)
    
    const styles = {
        transition: "0.7s",
        color: "#ffffff",
        backgroundColor: on ? "#6F4AAA" : "#D7CAEE"
        // backgroundColor: props.on ? "#6F4AAA" : "#D7CAEE"
    }

    function toggle(){
        setOn(item => !item)
    }

    return(
        <div style={styles} className="boxes__box" onClick={toggle}>
            {props.myId}
        </div>
    )
}

export default Box;