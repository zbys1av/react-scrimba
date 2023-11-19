import React from "react"
import ReactDOM from 'react-dom/client';


function Star(props){

    const starIcon = props.isFilled ? "https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png"

    return(
        <img className="card__star" width="40" onClick={props.handleClick} src={starIcon}></img>
    )
}

export default Star;