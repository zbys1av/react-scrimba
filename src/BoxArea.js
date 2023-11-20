import React, {useState} from "react"
import ReactDOM from 'react-dom/client';

import boxesData from "./boxesData";
import Box from "./Box";

function BoxArea(props){

    const [item, setItem] = useState(boxesData)

    // const mode = item.darkMode ? "red" : "black";
    // const mode = item.map(element => element.darkMode ? "red" : "black");

    const boxStyle = {
        backgroundColor: props.darkMode ? "#9874D3" : "#D7CAEE"
        // backgroundColor: mode
    }

    const boxElement = item.map(box => (
        // <div style={boxStyle} className="boxes__box" key={box.id}>{box.id}</div>
        <Box key={box.id} on={box.on} myId={box.id}/>
    ))
    
    return(
        <div className="boxes">
            {boxElement}
        </div>
    )
}

export default BoxArea;