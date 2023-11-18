import React, {useState} from "react"
import ReactDOM from 'react-dom/client';

function Card(){

    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let starIcon = contact.isFavorite ? "https://freeiconshop.com/wp-content/uploads/edd/star-outline-filled.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png"

    function toggleFavourite(){
        setContact(item => {
            return {

                // firstName: "John",
                // lastName: "Doe",
                // phone: "+1 (719) 555-1212",
                // email: "itsmyrealname@example.com",
                // isFavorite: true

                // SAME AS "...item"

                ...item,                        // spread all values 
                isFavorite: !item.isFavorite    //make value oposite. here can be any value from array
            }
        })
    }

    return(
        <div className="card">
            <div className="card__box">
                <img className="card__image" width="160" src="https://cdn-icons-png.flaticon.com/512/219/219983.png"></img>
                <div className="card__info">
                    <img onClick={toggleFavourite} className="card__star" width="40" src={starIcon}></img>
                    <h3 className="card__contact card__contact--name">{contact.firstName} {contact.lastName}</h3>
                    <p className="card__contact card__contact--phone">{contact.phone}</p>
                    <p className="card__contact card__contact--email">{contact.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;