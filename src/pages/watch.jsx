import React from 'react';
import './watch.css';
import tv from '../assets/watch.png';

const Watch = () => {
    return ( 
        <>
        < div className='watchdiv2'>
    
            <img src={tv} alt='watch' className='watchicon'/>
        
            <h6>Watch</h6>
        </div>
        </>
     );
}
 
export default Watch;