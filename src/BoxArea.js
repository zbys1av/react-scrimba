import React, {useState} from "react"
import ReactDOM from 'react-dom/client';

import boxesData from "./boxesData";
import Box from "./Box";

function BoxArea(props){

    const [item, setItem] = useState(boxesData)

    // const mode = item.darkMode ? "red" : "black";
    // const mode = item.map(element => element.darkMode ? "red" : "black");

    // const boxStyle = {
    //     backgroundColor: props.darkMode ? "#9874D3" : "#D7CAEE"
    //     // backgroundColor: mode
    // }

    function toggleColor(id){
        // console.log(id);

        setItem(prevBox => {                            // version 2.2 - changes background color depending on "on" value, seems like it is better, since we do not change original values or something like that 
            return prevBox.map((box) => {               // we take elemts frou our array one by one (it is our boxes) 
                return box.id === id ? {...box, on: !box.on} : box // than we compare ID of the original box with our "new" ID, if they match, we just "replace" the box if not, we just leave everything as it is 
            })
        })

        //SHIT GIVES AN ERROR FOR SOME REASON
        // setItem(prevBox => {                     // version 2.1 - changes background color depending on "on" value
        //     const newBox = []
        //     for (let i = 0; i < prevBox; i++){
        //         const currentBox = prevBox[i]
        //         if(currentBox.id === id){
        //             const updateBox = {
        //                 ...currentBox, 
        //                 on: !currentBox.on
        //             }
        //             newBox.push(updateBox)
        //         } else {
        //             newBox.push(currentBox)
        //         }
        //     }
        //     return newBox
        // })
    }

    const boxElement = item.map(box => (
        // <div style={boxStyle} className="boxes__box" key={box.id}>{box.id}</div>
        <Box key={box.id} on={box.on} myId={box.id} id={box.id} toggle={toggleColor} visible={box.id}/>
    ))
    
    return(
        <div className="boxes">
            {boxElement}
        </div>
    )
}

export default BoxArea;