import React, {useState} from "react" 
import ReactDOM from 'react-dom/client';


function AddElements(){
    const [array, setArray] = useState(["Item 1", "Item 2"]);

    return(
        <div className="add">
            <div className="add__box">
                <div className="add__button-box">
                    <span className="add__button">Add item</span>
                </div>
            </div>
        </div>
    )

}

export default AddElements;