import React from 'react';
import './post1.css';
import P2 from '../assets/p2.png';
import face from '../assets/face.png';
import Pic from '../assets/pic.png';
import live from '../assets/live.png';
const Post1 = () => {
    return ( 
        <div className='post1'>
            <div className='post1div1'>
                <img src={P2} alt='p2' className='p2'/>
                <div className='post1div2'></div>
            </div>
            <div className='line'></div>
            <div className='post1div3'>
                 <div className='post1div4'>
                <img src={live} alt="live" className='posticons'/>
                <h4>Live Video</h4>
                </div>
                    <div className='post1div4'>
                <img src={Pic} alt="pic" className='posticons'/>
                <h4>Photo/Video</h4>
                </div>
            <div className='post1div4'>
                <img src={face} alt="face" className='posticons'/>
                <h4>Feeling/activity</h4>
                </div>
                </div>
        </div>  


     );
}
 
export default Post1;