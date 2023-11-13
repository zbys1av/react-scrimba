import React, {useState} from "react" 
import ReactDOM from 'react-dom/client';

function Counter(){

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    const [tasks, letTasks] = useState(0);
    const [tracking, letTracking] = useState(0);
    const [calls, letCalls] = useState(0);

    function addTask(){
        letTasks(value => value + 1);
    }

    function removeTask(){
        letTasks(value => value - 1);
    }

    function addTracking(){
        letTracking(value => value + 1);
    }

    function removeTracking(){
        letTracking(value => value - 1);
    }

    function addCall(){
        letCalls(value => value + 1);
    }

    function removeCall(){
        letCalls(value => value - 1);
    }

    return(
        <div className="counter">
            <div className="counter__box">

                <div className="counter__date">
                    {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}
                </div>

                <div className="counter__section">
                    <h3 className="counter__title">Tasks</h3>
                    <span className="counter__count">{tasks}</span>
                    <div className="counter__buttons">
                        <span onClick={removeTask} className="counter__action">-</span>
                        <span onClick={addTask} className="counter__action">+</span>
                    </div>
                </div>



                <div className="counter__section">
                    <h3 className="counter__title">Tracking</h3>
                    <span className="counter__count">{tracking}</span>
                    <div className="counter__buttons">
                        <span onClick={removeTracking} className="counter__action">-</span>
                        <span onClick={addTracking} className="counter__action">+</span>
                    </div>
                </div>



                <div className="counter__section">
                    <h3 className="counter__title">Call</h3>
                    <span className="counter__count">{calls}</span>
                    <div className="counter__buttons">
                        <span onClick={removeCall} className="counter__action">-</span>
                        <span onClick={addCall} className="counter__action">+</span>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Counter;