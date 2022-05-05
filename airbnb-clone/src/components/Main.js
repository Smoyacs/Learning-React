import React from "react"
import hero from "../images/hero.svg"

export default function Main(){
    return (
        
        <main>

            <div className="hero">
                <img src={hero} alt="logo" className="hero--logo"/>
            </div>

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

        </main>
        
    )
}