import React from "react"
import ReactDOM from 'react-dom/client';

function Card(props){
    let available = ""
    if (props.available == false){
        available = "Sold out";
    } else {
        available = "Available";
    }

    return(
        <div className="cards__card">
            <div className="cards__picture-section">
                <span className="cards__button">{available}</span>
                <img className="cards__picture" src={props.img} width={200}></img>
            </div>
            <div className="cards__text-section">
                <div className="cards__rating">
                    <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                    <span className="cards__points">{props.raiting}</span>
                    <span className="cards__reviews">({props.reviews})</span>
                    <span className="cards__country">{props.country}</span>
                </div>
                <div className="cards__info">Life lessons with {props.info}</div>
                <div className="cards__price"> <span className="cards__from bold">From ${props.price}</span> / person</div>
            </div>
        </div>
    )
}

export default Card;