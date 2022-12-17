import React from "react"
import aboutbg from "./doodle items.png"
import aboutimg from "./Group 62.png"
export default function About(){
    return(
        <div className="my-info">
            <div className="info">
                <div className="about-me"><h1 className="about">About</h1><h1 className="me">me</h1></div>
                <p className="info-text">
                    My name is Bhargav Parashar. I am a student pursuing Electrical Engineering at Jorhat Engineering College. I am a Full Stack (MERN) Web developer. I also have a solid grasp over C,python,Java along with DSA and other important concepts. My aim is to utilise my knowledge for the betterment of the society by working towards artifical intelligence and neural networking.          
                </p>
            </div>
            <div className="info-img">
                <img src={aboutbg} alt="info doodle" className = "about-doodle"/>
                <img src={aboutimg} alt="info img" className = "about-img"/>
            </div>
        </div>
    )
}