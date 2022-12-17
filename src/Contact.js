import React from "react"
import contactimg1 from "./Vector 186.png"
import contactimg2 from "./Group 2372.png" 
export default function Contact(){
    return(
        <div className="contact-page">
            <div className="contact-headings">
                <h1 className="contact-heading1">Got a project in</h1><h1 className="contact-heading2">mind?</h1>
                <img src={contactimg1} alt="contact-img" className="contact-img1"/>
                <img src={contactimg2} alt="contact-img" className="contact-img2"/>
            </div>
            <form action="#" className="contact-form">
                <label className="contact-name">Your Name</label>
                <input type="text" placeholder="Name"/>
                <label className="contact-email">Your Email</label>
                <input type="email" placeholder="Email"/>
                <label className="contact-message">Your Message</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <button className="send-btn">Send Message</button>
            </form>
        </div>
    )
}