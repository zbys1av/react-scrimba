import React from 'react';
import ReactDOM from 'react-dom/client';

function About(){
    return(
        <div className='about section'>
            <div className='about__box'>
                <img className='about__image' width={500} src="https://www.nortekgroup.com/assets/images/_1200x630_crop_center-center_82_none/Waves.jpg?mtime=1693993620"></img>
                <p className='about__text'>Proin ac odio non nisl bibendum cursus. 
                Vivamus auctor, nisi id convallis convallis, mi purus hendrerit tellus, 
                et vestibulum metus augue ut urna. Nullam tincidunt ligula eu nulla 
                laoreet, eu vehicula elit accumsan. Sed feugiat vehicula tellus, non 
                feugiat eros dapibus vel. Nullam bibendum arcu ac risus auctor, vel 
                facilisis justo tincidunt.</p>
            </div>
        </div>
    )
}

export default About;