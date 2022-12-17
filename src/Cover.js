import React from "react"
import "./style.css"
import coverimg from "./Group 2346.png"
import coverdoodle from "./doodles mixed round.png"
import arrowdoodle from "./Vector 187.png"
export default function Cover(){
    return(
        <div className = "front-page">
            <div className="cover-text">
                <h1 className = "header1">CREATIVE UI</h1>
                <h1 className = "header2">DESIGNER</h1>
                <img src={arrowdoodle} alt="arrow doodle" className = "arrow-doodle"/>
                <div className="buttons">
                    <button className="hire-me">Hire me</button>
                    <button className="cv-download">Download CV</button>
                </div>
            </div>
            <div className="cover-logo">
                <img className="cover-doodle" src={coverdoodle} alt="Cover doodle" />
                <img className = "cover-img" src={coverimg} alt="Cover img" />

            </div>
        </div>  
    )
}