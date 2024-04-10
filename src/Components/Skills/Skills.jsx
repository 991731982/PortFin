import React from 'react'
import './Skills.css'
import logo6 from '../../assets/logo6.png'



const Skills =() =>{
  return(
    <div id='skills'className="Skills">
        <div className="skils-title"  >
        <h1>Skills</h1>
        <img src={logo6 } alt="" />
        </div>
        <div className="ul">

        <div className="titles">
            <h2>Web Design</h2>
            <ul className="title">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>wordpress</li>
                <li>responsive design</li>
                <li>bootstrap</li>
                <li>React.js</li>
                <li>Node.js</li>
            </ul>
        </div>

        <div className="titles">
            <h2>Technical Skills(Adobe)</h2>
            <ul className="title">
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe After Effects</li>
                <li>Adobe Premiere Pro</li>
                <li>Adobe Animate</li>
                <li>Adobe Areo</li>
            </ul>
        </div>

        <div className="titles">
            <h2>Interactive Coding</h2>
            <ul className="title">
                <li>Processing</li>
                <li>TouchDesigner</li>
                <li>P5.js</li>
                <li>Three.js</li>
                <li>ZIM create.js</li>
            </ul>
        </div>

        <div className="titles">
            <h2>Concept Art/Design</h2>
            <ul className="title">
                <li>Procreate</li>
                <li>Sketch</li>
                <li>Figma</li>
                <li>Mural</li>
                <li>midjourney</li>
            </ul>
        </div>

        <div className="titles">
            <h2>3D</h2>
            <ul className="title">
                <li>cinema 4D</li>
                <li>Unity</li>
                <li>blender</li>
                <li>MAYA</li>
            </ul>
        </div>

        <div className="titles">
            <h2>Photograph</h2>
            <ul className="title">
                <li>Canon</li>
                <li>Nikon</li>
                <li>FUJIFILM</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Skills