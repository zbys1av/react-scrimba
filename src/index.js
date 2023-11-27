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
import Message from './Message';

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
            {/* <BoxArea/> */}
            <Jokes/>
            <Message/>
        </div>
    )
}

root.render(
    <ReactPage/>
)