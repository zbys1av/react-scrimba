import React from "react"
import ReactDOM from 'react-dom/client';

function Main(){
    return(
        <div className="main">
            <div className="main__box">
                <img className="main__image" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                <img className="main__image" src="https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                <img className="main__image main__image--horizontal" src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                <img className="main__image" src="https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                <img className="main__image" src="https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg" width={50}></img>
            </div>
        </div>
    )
}

export default Main;