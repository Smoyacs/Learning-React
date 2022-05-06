import React from "react"


export default function Main(){
    return (
        
        <main>

            <div className="hero">
                <img src={process.env.PUBLIC_URL+"/images/hero.png"} alt="logo" className="hero--logo"/>
            </div>

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

        </main>
        
    )
}