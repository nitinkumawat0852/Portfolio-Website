import React from 'react';
import theme from '../../Assets/about.svg'
import mywork_data from '../../Assets/Myworkdata';
import arrow from '../../Assets/arrow.svg'
import './MyWork.css'
function My_Work() {
    return (
        <div id='work' className='mywork'>
            <div className='mywork-title'>
                <h1>My Latest Work</h1>
                <img src={theme}/>
            </div>
            <div className='mywork-container'>
                {mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} />
                })}
            </div>
            <div className='mywork-showmore'>
                <p>Show More</p>
                <img src={arrow}/>
            </div>
        </div>
    );
}

export default My_Work;