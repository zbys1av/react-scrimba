import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById("root"));
const page = (
    <div>
        <h1>Title</h1>
        <h3>Mini title</h3>
        <ol>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ol>
    </div>
)

root.render(
    page,
    // JSON.stringify(page)
)
