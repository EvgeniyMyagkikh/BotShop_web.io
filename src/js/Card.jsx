import React from "react"
import Buttons from "./Buttons";

export const Card = (props) => {

    return (
        <div className="card">
            <img className="card_img" src={props.card.img} alt=""/>
            <h2 className="card_title">{props.card.title}</h2>
            <Buttons data={props.card}/>
        </div>
    )
};

export default Card;