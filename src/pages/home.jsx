import React from 'react';
import ReactDOM from 'react-dom/client';
import './home.css';
import Btn from './button';
import Header from './header';  
import Watch from './watch';
import Title from './title';
import SideTabs from './sidetabs';
import Story from './story';
import Post1 from './post1';

const Home = () => {
    return ( 
        <>
        <Header/>
        <div className='pagebody'>
            <div className='columnleft'>
                <div className='buttondiv'>
                 <Btn/>    
                 </div>
                 <div className='watchdiv'>
                    <Watch/>
                       <Watch/>
                          <Watch/>
                             <Watch/>
                 </div>
                 <Title/>
                 <div className='watchdiv'>
                    <SideTabs/>
                      <SideTabs/>
                        <SideTabs/>
                          <SideTabs/>
                            <SideTabs/>
                              <SideTabs/>
                 </div>
            </div>
            <div className='middlecolumn'>
                <div className='middlecolumn1'>
                     <div className='middlecolumn2'>
                    <Story/>
                       <Story/>
                          <Story/>
                             <Story/>
                             </div>
                             </div>
<Post1/>
                </div>
        </div>       
        </>
     );
}
  
export default Home;