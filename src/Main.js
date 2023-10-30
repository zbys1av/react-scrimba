import React from 'react';
import ReactDOM from 'react-dom/client';

function Main(){
    return(
        <div className='main'>
            <div className='main__list-section'>
                <h3 className='main__title'>There should be some stupid list</h3>
                <ul className='main__list'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Sed ac turpis euismod, tristique nisl id, volutpat libero</li>
                    <li>Vestibulum non vestibulum lorem, in lacinia risus</li>
                    <li>Pellentesque habitant morbi tristique senectus</li>
                    <li>Proin ac odio non nisl bibendum cursus</li>
                    <li>Vivamus auctor, nisi id convallis convallis</li>
                    <li>Nullam tincidunt ligula eu nulla laoreet</li>
                    <li>Sed feugiat vehicula tellus, non feugiat</li>
                    <li>Nullam bibendum arcu ac risus auctor</li>
                </ul>
            </div>
        </div>
    )
}

export default Main;