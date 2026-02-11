import React from 'react';
import './sidetabs.css';
import img2 from '../assets/Rectangle 26.png';
const SideTabs = () => {
    return (  
        <div className='tabdiv'>
            <img src={img2} alt='tab' className='img2'/>
            <h3>UI / UX Designers & Developers</h3>
        </div>
    );
}
 
export default SideTabs;