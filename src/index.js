import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import logo from './images/react-icon.png';
// import reportWebVitals from './reportWebVitals';


// TASK 1
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const page = (
//     <div>
//         <h1>Title</h1>
//         <h3>Mini title</h3>
//         <ol>
//             <li>First</li>
//             <li>Second</li>
//             <li>Third</li>
//         </ol>
//     </div>
// )

// root.render(
//     page,
//     // JSON.stringify(page)
// )



// TASK 2

const root = ReactDOM.createRoot(document.getElementById("root"));

const page = (
    <div className='container'>
        <img className='react-logo' src="/images/react-icon.png" width={100}/>
        {/* <img className='react-logo' src={logo} width={100}/> */}
        <div className='facts'>
            <h3 className='facts__title'>Fun facts about React</h3>
            <ul className='facts__list'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>

)

root.render(
    page
)