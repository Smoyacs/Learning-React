import React from "react"
import star from "../images/star.png"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt="" className="card--image"/>
            <div className="card-stats">
                <img src={star} alt="rating" />
                <span className="bold">{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="gray">{props.title}</p>
            <p className="gray"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
