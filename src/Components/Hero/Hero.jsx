import React from 'react'
import './Hero.css'
import profile_img from"../../assets/Me.png"
import logo5 from"../../assets/bg.png"

const Hero =() =>{
  return(
    
    <div id='home' className='hero'>
       <div className="img-container">
           <img src={logo5} alt="" className="hidden-img" />
           <img src={profile_img} alt="" />
        </div>
        <h1><span>Hi, I'm Ashley,</span>a creative UX/ UI designer</h1>
        <p>Brand Design / UI UX Design / Web Design / Front-end Design Graphic Design / Conceptual Art/ MG Animator / Illustrator / IP Design / Multimedia Design</p>
        {/* <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>

        </div> */}

    </div>
  )
}

export default Hero