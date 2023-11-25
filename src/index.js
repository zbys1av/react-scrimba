import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Header from './Header';
import Main from './Main';
import MiniTask from './MiniTask';
import AddElements from './AddElement';
import Card from './Card';
import BoxArea from './BoxArea';
import Joke from './Joke';
import Jokes from './Jokes';

const root = ReactDOM.createRoot(document.getElementById("root"));

function ReactPage(){
    return(
        <div className='container'>
            <Header/>
            <Main/>
            <h3>Additional tasks:</h3>
            {/* <MiniTask/> */}
            {/* <AddElements/> */}
            {/* <Card/> */}
            <Jokes/>
            <BoxArea/>
        </div>
    )
}

root.render(
    <ReactPage/>
)