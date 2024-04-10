import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/logo7.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { Link } from 'react-router-dom';




const MyWork =() =>{
  return(
    <div id='work'className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=""/>

        </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
                            return (
                              <a href={work.w_url} key={index} target="_blank" rel="noopener noreferrer">
                                <img src={work.w_img} alt={work.w_name} style={{cursor: 'pointer'}} />
                              </a>
                            );
        })}
      </div>
      <div className="mywork-showmore">
      <a href="https://ashleyimmcom.wordpress.com/#Portolio" target="_blank" rel="noopener noreferrer">
          <p>Show More</p>
        </a>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork