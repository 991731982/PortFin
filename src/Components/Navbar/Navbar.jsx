import React from 'react'
import './Navbar.css'
import logo from '../../assets/logoMy.png'
import underline from '../../assets/logo9.png'
import { useState } from 'react';
import { Link as AnchorLink } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import {useRef } from 'react';


const Navbar =() =>{

  const [menu,setMenu]=useState("home");
  const menuRef=useRef();

  const openMenu =()=>{
    menuRef.current.style.right='0';
  }

  const closeMenu =()=>{
    menuRef.current.style.right='-350px';
  }

  return(
    <div className='navbar'>
        <img src={logo} alt=""/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef}className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline}  style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='experience'><p onClick={()=>setMenu('experience')}>Experience</p></AnchorLink>{menu==='experience'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='skills'><p onClick={()=>setMenu('skills')}>Skills</p></AnchorLink>{menu==='skills'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='work'><p onClick={()=>setMenu('work')}>Portfolio</p></AnchorLink>{menu==='work'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} style={{ width: '60px' }}alt=''/>:<></>}</li>
        </ul>

        <div className="nav-connect"> <AnchorLink className='anchor_link' spy={true} smooth={true} duration={500} offset={50} to='contact'><p onClick={()=>setMenu('contact')}>Connect With Me</p></AnchorLink>{menu==='contact'}</div>
        
    </div>
  )
}

export default Navbar