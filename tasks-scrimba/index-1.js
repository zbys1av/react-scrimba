import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


//TASK 1
// const rootTitle = ReactDOM.createRoot(document.getElementById("root"));
// const rootList = ReactDOM.createRoot(document.getElementById("root"));

//can be used only 1 by 1 (rootTitle, rootList)

// rootTitle.render(
//   <h1>Hello! React</h1>,
// );

// rootList.render(
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
// );



//TASK 2
// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Navbar() {
//   return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav mr-auto">
//               <li className="nav-item active">
//                   <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Dropdown
//                   </a>
//                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item" href="#">Action</a>
//                   <a className="dropdown-item" href="#">Another action</a>
//                   <div className="dropdown-divider"></div>
//                   <a className="dropdown-item" href="#">Something else here</a>
//                   </div>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link disabled" href="#">Disabled</a>
//               </li>
//               </ul>
//               <form className="form-inline my-2 my-lg-0">
//                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//               </form>
//           </div>
//       </nav>
//   )
// }

// function TextParagraph(){
//   return (
//     <div className='main'>
//       <h3 className='main__title'>Some random text</h3>
//       <p className='main__text'>asoidfjoiasjf aoisjfosaj flaksfjjknxbcb
//         osajdfoisjdaf koajsdfoijlskadjfoasidjfasoijdfaskdjfoiasjdfoijafaoj
//         osajdfoiasjdflskajflsakdjfoijsadflksjaodifjaosidjfl,ncbcovjo osajdfoisjdaf
//       </p>
//     </div>
//   );
// }

// root.render(
//   <div className='container'>
//     <Navbar/>
//     <TextParagraph/>
//   </div>
// )




//TASK 3
const root = ReactDOM.createRoot(document.getElementById("root"));
const navbar = (
  <nav>
    <h1>Title</h1>
    <ul>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
    </ul>
  </nav>
)

root.render(
    navbar
)
