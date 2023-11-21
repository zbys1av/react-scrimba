import React, {useState} from "react"
import ReactDOM from 'react-dom/client';

import boxesData from "./boxesData";

function Box(props){

    const [on, setOn] = useState(props.on)
    
    const styles = {
        transition: "0.7s",
        color: "#ffffff",
        // backgroundColor: on ? "#6F4AAA" : "#D7CAEE"          //if use v1
        backgroundColor: props.on ? "#6F4AAA" : "#D7CAEE"       //if use v2.2
    }

    function change(){              // version 1 - changes background color depending on "on" value
        setOn(item => !item)
    }

    return(
        <div 
            style={styles} 
            className="boxes__box" 
            onClick={() => props.toggle(props.id)}  // () => is needed to pass function value functino ____ (value)
            // onMouseUp={change}
        >

                {props.myId}

        </div>
    )
}

export default Box;