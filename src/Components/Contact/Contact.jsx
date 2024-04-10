import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/logo8.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact =() =>{


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9f263524-4eaf-4755-8785-a68eb4d86a6b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then('call node')
        .then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



  return(
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contact With Me</h1>
            <img src={theme_pattern} alt="" className="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1> 
                <p>For example, If a malicious user enters the following code into a message board, the next user visits this message board with JavaScript enabled is redirected to evil.example.org, and any cookies associated with the current site are included in the query string of the URL.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" className="" /><p>lingxichen1998@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" className="" /><p>+1(437)766-6188</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location_icon} alt="" className="" /><p>Oakville,Toronto,Ontario</p>
                        </div>
                </div>
            </div>
            <form  onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter Your Name' name='name'/>
                <label htmlFor>Your Email</label>
                <input type='email' placeholder='Enter Your Email' name='email'/>
                <label htmlFor=''>Write Your Message Here</label>
                <textarea name='message' rows='8' placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact