import React from 'react'
import './About.css'
import logo1 from '../../assets/logo1.png'
import profile_img from '../../assets/Me2.png'

const About =() =>{
  return(
    <div id='about'className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={logo1} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As a dedicated Design and Arts Practitioner, my academic and professional journey has been centered around interactive animation, user experience and interface design, narrative dynamics, and immersive storytelling.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Visual Design</p><hr style={{width:'90%'}}/></div>
                <div className="about-skill"><p>Interactive Coding</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>UX/UI</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'40%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>YEARS OF VISUAL DESIGN EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>8+</h1>
            <p>VISUAL &TECHINQUE TOOLS</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>3</h1>
            <p>WORK EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default About