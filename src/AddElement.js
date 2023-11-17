import React, {useState} from "react" 
import ReactDOM from 'react-dom/client';


function AddElements(){
    const [itemArray, setItemArray] = useState(["Item 1", "Item 2"]);

    function addItem(){
        setItemArray(item => [...item, `Item ${item.length + 1}`]);
    }

    const element = itemArray.map(item => <p className="add__item" key={item}>{item}</p>)

    return(
        <div className="add">
            <div className="add__box">
                <div className="add__button-box">
                    <span onClick={addItem} className="add__button">Add item</span>
                </div>
                <div className="add__items-section">
                    {element}
                </div>
            </div>
        </div>
    )

}

export default AddElements;