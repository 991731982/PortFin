import React from 'react'
import './Experience.css'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'


const Experience =() =>{
  return(
    <div id='experience' className="Experiences">
        <div className="img">
             <h1 className='title'>My Experiences</h1>
                <img src={logo3} alt="" className='logo3'/>
        </div>

    <div>
    <div className="Experience">

    <div className="img">
        <h2 className="title1">1. My Professional Experience</h2>
        <img src={logo4} alt="" className="logo4"/>
    </div>

        <div className="Each">
            <h1>Brand & Web Designer</h1>
            <h2>ExStorm</h2>
            <h2>Beijing,China </h2>
            <h3 className="align-right">06/2021-09/2021</h3>
            <hr />
            <h3>My Responsibilities:</h3>
            <p>My job in ExStorm was my first practice turning from visual design to immersive entertainment experience.</p>
            <p>I proposed the marketing strategy of enhancing user experience using AR scene, to strengthen the brand story-telling concept and entertaining aspect.</p>
            <p>And I also participated in the website design,brand design, poster design, advertising design, packaging design and trendy toys product design of the brand Heetheet and barzardodo.</p>
            <hr/>
            <h3>Skills:</h3>
            <p>Brand Design · Product Design · Web Design · AR · User Experience </p>
        </div>

        <div className="Each">
            <h1>Career Break</h1>
            <h2>Professional development</h2>
            <h2>Beijing,China</h2>
            <h3 className="align-right">09/2021-08/2022</h3>
            <hr />
            <h3>My Responsibilities:</h3>
            <p>My aspirations extend beyond conventional graphic design and brand design. I am deeply fascinated by the storytelling potential of interactive games and animations with wonderful multimedia platforms. Therefore, I conducted some user experience design and multimedia art in many different media forms.</p>
            <hr />
        </div>

        <div className="Each">
            <h1>Graphic Designer</h1>
            <h2>E-GO</h2>
            <h2>Beijing,China</h2>
            <h3 className="align-right">08/2022-03/2023</h3>
            <hr />
            <h3>My Responsibilities:</h3>
            <p>I designed the IP image and other preliminary planning and design for the New Year activities of Zhuhai Hengqin Innovation Square cultural tourism project.</p>
            <p>And I came up with some creative solutions to enhance the company's brand image, using some interactive technologies to enhance the experience of the office space, breaking through the limitations of traditional brand design, and using AR technology, among others, to bring a new experience to the office space. In my later work, I also keeps learning new media, such as generative art, which gives new sensory experiences to brand promotion visuals.</p>
            <p>In the process of designing the 2022 calendar cultural and creative products for the company, I proposed a creative conceptual design and actively contacted the production suppliers who could provide the design to meet the needs, and finally, the products were produced as gifts for the company’s partners.</p>
            <hr />
            <h3>Skills:</h3>
            <p>Unity · Web Design · AR · Multimedia Art · Activity Planning · Branding</p>
        
        </div>
        
    </div>

    <div className="Experience">
        
    <div className="img">
    <h2 className="title1">2. My Education Experience</h2>
    <img src={logo5} alt=""className="logo5" />
    </div>
        <div className="Each">
            <h1>BIGC(Beijing Institute Of Graphic Communication)</h1>
            <h2>Bachelor of Fine Art</h2>
            <h2>visual communication/ brand design</h2>
            <h2>Beijing,China</h2>
            <h3 className="align-right">09/2016-07/2022</h3>
            <hr />
            <h3>Skills I have learnt:</h3>
                <ul className="skills">
                    <li>graphic design</li>
                    <li>theater art & stage design</li>
                    <li>illustrations</li>
                    <li>brand design</li>
                    <li>speculative design</li>
                    <li>UI design</li>
                    <li>UX design</li>
                    <li>multimedia design</li>
                    <li>generating art</li>
                </ul>
        </div>

        <div className="Each">
            <h1>Sheridan College</h1>
            <h2>Postgraduate Degree Certificate</h2>
            <h2>Interactive Media Management</h2>
            <h2>Canada, ON</h2>
            <h3 className="align-right">09/2023-04/2024</h3>
            <hr/>
            <h3>Skills I have learnt:</h3>
                <ul className="skills">
                    <li>web design</li>
                    <li>web design & development</li>
                    <li>interactive coding</li>
                    <li>UX design</li>
                    <li>UI design</li>
                    <li>Audio & Video Editing</li>
                    <li>3D design</li>
                    <li>storytelling</li>
                </ul>
        </div>


        <div className="Each">
            <h1>Sheridan College</h1>
            <h2>Postgraduate Degree Certificate</h2>
            <h2>Digital Product Design</h2>
            <h2>Canada, ON</h2>
            <h3 className="align-right">09/2024-05/2025</h3>
            <hr />
            <h3>Skills I have learnt:</h3>
                <ul className="skills">
                    <li>UX design</li>
                    <li>web design</li>
                    <li>interactive design</li>
                    <li>Story telling</li>
                    <li>UI design</li>
                </ul>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Experience