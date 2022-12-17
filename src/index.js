import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Cover from "./Cover"
import About from "./About"
import Project from "./Projects"
import Contact from "./Contact"
function Main(){
    return(
        <div className="web">
            <Header/>
            <Cover/>
            <About/>
            <Project/>
            <Contact/>
        </div>       
    )
}
ReactDOM.render(<Main/>,document.getElementById("root"))