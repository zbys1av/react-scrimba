import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Header from './Header';
import Main  from './Main';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

root.render(
    <ReactPage/>
)