import React from "react";

const Card = ({image, price, name}) => {
    return (
        <div className="card">
            <img className="cardImg" src={image}/>
            <h2 className="cardName">{name}</h2>
            <p className="price">{price}</p>
            <button className="cardButton">Buy now</button>
        </div>
    )
}
export default Card;