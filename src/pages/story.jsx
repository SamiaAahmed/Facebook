import React from 'react';
import './story.css';
import p1 from '../assets/p1.png';
import storypic from '../assets/story.png';
const Story = () => {
    return ( 
        <div className='storydiv '>
            <img className='storyimg ' src={storypic} />
            <div className='storydiv1 '>
          <img className='storyp' src={p1} />
          <h6 className='h6-3'>Islam Ali</h6>
          </div>
        </div>
     );
}
 
export default Story;