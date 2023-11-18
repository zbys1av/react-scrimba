import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Header from './Header';
import Main from './Main';
import MiniTask from './MiniTask';
import AddElements from './AddElement';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <MiniTask/>
            <AddElements/>
            <Card/>
        </div>
    )
}

root.render(
    <ReactPage/>
)