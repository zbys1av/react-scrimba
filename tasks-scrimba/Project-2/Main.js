import React from "react"
import ReactDOM from 'react-dom/client';

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
let periodOfTheDay = "";

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

function Main(){
    if (hours < 12){
        periodOfTheDay = "morning";
    } else if (hours >= 12 && hours <= 17){
        periodOfTheDay = "afternoon";
    } else {
        periodOfTheDay = "night";
    }


    return(
        <div className="main">
            <div className="main__box">
                <div className="main__images">
                    <div className="main__images-row">
                        <img className="main__image" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                    </div>
                    <div className="main__images-row">
                        <img className="main__image" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                        <img className="main__image" src="https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                    </div>
                    <div className="main__images-row">
                        <img className="main__image" src="https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                        <img className="main__image" src="https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg" width={50}></img>
                    </div>
                    <div className="main__images-row">
                        <img className="main__image" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                        <img className="main__image" src="https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                    </div>
                    <div className="main__images-row">
                        <img className="main__image" src="https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={50}></img>
                        <img className="main__image" src="https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg" width={50}></img>
                    </div>
                </div>
                <div className="main__text-section">
                    <h3 className="main__title title">Online Experiences</h3>
                    <p className="main__text">Join unique interactive activities led by 
                        one-of-a-kind hosts-all without leaving home.</p>
                </div>
                <p className="main__date">
                    Good {periodOfTheDay} 😉 <br/>
                    That is {hours}:{minutes} <br/>
                    {months[date.getMonth()]} {date.getDate()}
                </p>
            </div>
        </div>
    )
}

export default Main;