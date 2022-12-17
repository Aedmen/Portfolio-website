import React from "react"
export default function Projects(){
    return(
        <div className = "project-page">
            <div className="project-headings">
                <h1 className="project-heading1">My recent</h1><h1 className="project-heading2">works</h1>
            </div>
            <div className="project-btn">
                <button>All</button>
                <button>Web development</button>
                <button>Python</button>
                <button>C</button>
                <button>Java</button>
            </div>
        </div>
    )
}