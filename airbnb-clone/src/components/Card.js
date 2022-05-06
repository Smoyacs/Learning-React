import React from "react"


export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    

    return (
        <div className="card">
            {
            badgeText && 
            <div className="card--badge">{badgeText}</div>
            }
            <img src={process.env.PUBLIC_URL+"/images/"+props.coverImg} alt="card-list" className="card--image"/>
            <div className="card-stats">
                <img src={process.env.PUBLIC_URL+"/images/star.png"} alt="rating" />
                <span className="bold">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="gray">{props.title}</p>
            <p className="gray"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
