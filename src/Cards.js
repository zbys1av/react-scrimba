import React from "react"
import ReactDOM from 'react-dom/client';

import Card from "./Card";

function Cards (){
    return(
        <div className="cards">
            <div className="cards__box">
                <Card
                    img = "https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
                    raiting = "4.7"
                    reviews = "29"
                    country = "Canada"
                    info = "Zaza Jimbs"
                    price = "111"
                />

                <Card
                    img = "https://images.pexels.com/photos/17038848/pexels-photo-17038848/free-photo-of-river-flowing-in-green-valley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
                    raiting = "3.2"
                    reviews = "139"
                    country = "USA"
                    info = "Zara Viva"
                    price = "211"
                />

                <Card
                    img = "https://images.pexels.com/photos/7292745/pexels-photo-7292745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
                    raiting = "4.9"
                    reviews = "18"
                    country = "UK"
                    info = "Jiza Jiba"
                    price = "365"
                />

                <Card
                    img = "https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"    
                    raiting = "3.9"
                    reviews = "119"
                    country = "Kenya"
                    info = "Jeen White"
                    price = "15"
                />
                {/* <div className="cards__card">
                    <div className="cards__picture-section">
                        <span className="cards__button">Sold out</span>
                        <img className="cards__picture" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200}></img>
                    </div>
                    <div className="cards__text-section">
                        <div className="cards__rating">
                            <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                            <span className="cards__points">5.0</span>
                            <span className="cards__reviews">(6)</span>
                            <span className="cards__country">USA</span>
                        </div>
                        <div className="cards__info">Life lessons with Katie Zaferes</div>
                        <div className="cards__price"> <span className="cards__from bold">From $136</span> / person</div>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="cards__picture-section">
                        <span className="cards__button">Sold out</span>
                        <img className="cards__picture" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200}></img>
                    </div>
                    <div className="cards__text-section">
                        <div className="cards__rating">
                            <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                            <span className="cards__points">5.0</span>
                            <span className="cards__reviews">(6)</span>
                            <span className="cards__country">USA</span>
                        </div>
                        <div className="cards__info">Life lessons with Katie Zaferes</div>
                        <div className="cards__price"> <span className="cards__from bold">From $136</span> / person</div>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="cards__picture-section">
                        <span className="cards__button">Sold out</span>
                        <img className="cards__picture" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200}></img>
                    </div>
                    <div className="cards__text-section">
                        <div className="cards__rating">
                            <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                            <span className="cards__points">5.0</span>
                            <span className="cards__reviews">(6)</span>
                            <span className="cards__country">USA</span>
                        </div>
                        <div className="cards__info">Life lessons with Katie Zaferes</div>
                        <div className="cards__price"> <span className="cards__from bold">From $136</span> / person</div>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="cards__picture-section">
                        <span className="cards__button">Sold out</span>
                        <img className="cards__picture" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200}></img>
                    </div>
                    <div className="cards__text-section">
                        <div className="cards__rating">
                            <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                            <span className="cards__points">5.0</span>
                            <span className="cards__reviews">(6)</span>
                            <span className="cards__country">USA</span>
                        </div>
                        <div className="cards__info">Life lessons with Katie Zaferes</div>
                        <div className="cards__price"> <span className="cards__from bold">From $136</span> / person</div>
                    </div>
                </div>
                <div className="cards__card">
                    <div className="cards__picture-section">
                        <span className="cards__button">Sold out</span>
                        <img className="cards__picture" src="https://images.pexels.com/photos/12879014/pexels-photo-12879014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={200}></img>
                    </div>
                    <div className="cards__text-section">
                        <div className="cards__rating">
                            <img className="cards__star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" width={20}></img>
                            <span className="cards__points">5.0</span>
                            <span className="cards__reviews">(6)</span>
                            <span className="cards__country">USA</span>
                        </div>
                        <div className="cards__info">Life lessons with Katie Zaferes</div>
                        <div className="cards__price"> <span className="cards__from bold">From $136</span> / person</div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Cards;