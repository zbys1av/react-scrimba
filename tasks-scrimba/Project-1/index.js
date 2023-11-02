import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Header from './Header';
import Main  from './Main';
import About from './About';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <About/>
            <Footer/>
        </div>
    )
}

root.render(
    <ReactPage/>
)