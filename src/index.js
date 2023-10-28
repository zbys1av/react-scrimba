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

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const page = (
//     <div className='container'>
//         <img className='react-logo' src={logo} width={100}/>
//         {/* <img className='react-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" width={100}/> */}
//         <div className='facts'>
//             <h3 className='facts__title'>Fun facts about React</h3>
//             <ul className='facts__list'>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     </div>

// )

// root.render(
//     page
// )


// TASK 3

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function ReactPage(){
//     return(
//         <div className='container'>
//             <img src={logo} width={60}/>
//             <div className='facts'>
//                 <h3 className='facts__title'>There should be some stupid list</h3>
//                 <ul className='facts__list'>
//                     <li>Element 1 'asidfasdfohanvkasmdfi'</li>
//                     <li>Element 2 'alskdjf0iosjdfkamf'</li>
//                     <li>Element 3 'ndkvfbnuioasgsadiofj'</li>
//                     <li>Element 4 'dklbn;miuopsklasdjf'</li>
//                     <li>Element 5 'aklsnvmpiouheioprkngegkjlklj asdkfj'</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// root.render(
//     <ReactPage/>
// )



// TASK 4

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function ReactPage(){
//     return(
//         <div className='container'>
//             <div className='header'>
//                 <nav className='header__nav'>
//                     <img src={logo} width={50} className='header__logo'></img>
//                     <ul className='header__list'>
//                         <li>button 1</li>
//                         <li>button 2</li>
//                         <li>button 3</li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className='main'>
//                 <div className='facts'>
//                     <h3 className='facts__title'>There should be some stupid list</h3>
//                     <ul className='facts__list'>
//                         <li>Element 1 'asidfasdfohanvkasmdfi'</li>
//                         <li>Element 2 'alskdjf0iosjdfkamf'</li>
//                         <li>Element 3 'ndkvfbnuioasgsadiofj'</li>
//                         <li>Element 4 'dklbn;miuopsklasdjf'</li>
//                         <li>Element 5 'aklsnvmpiouheioprkngegkjlklj asdkfj'</li>
//                     </ul>
//                 </div>
//             </div>
//             <footer className='footer'>
//                 <span>
//                     <a href='https://github.com/zbys1av'>zbslv</a> oct 2023
//                 </span>
//             </footer>
//         </div>
//     );
// }

// root.render(
//     <ReactPage/>
// )


// TASK 5
const root = ReactDOM.createRoot(document.getElementById("root"));

function Header(){
    return(
        <header className='header'>
            <nav className='header__nav'>
                <img src={logo} width={50} className='header__logo'></img>
                <ul className='header__list'>
                    <li>button 1</li>
                    <li>button 2</li>
                    <li>button 3</li>
                </ul>
            </nav>
            {/* <div className='header__background'></div> */}
        </header>
    )
}

function Main(){
    return(
        <div className='main'>
            <div className='facts'>
                <h3 className='facts__title'>There should be some stupid list</h3>
                <ul className='facts__list'>
                    <li>Element 1 'asidfasdfohanvkasmdfi'</li>
                    <li>Element 2 'alskdjf0iosjdfkamf'</li>
                    <li>Element 3 'ndkvfbnuioasgsadiofj'</li>
                    <li>Element 4 'dklbn;miuopsklasdjf'</li>
                    <li>Element 5 'aklsnvmpiouheioprkngegkjlklj asdkfj'</li>
                </ul>
            </div>
        </div>
    )
}

function Footer(){
    return(
        <footer className='footer'>
            <span>
                <a href='https://github.com/zbys1av'>zbslv</a> oct 2023
            </span>
        </footer>
    )
}

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

root.render(
    <ReactPage/>
)