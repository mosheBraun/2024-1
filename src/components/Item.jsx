import React from "react"
import './Item.css'

function Item ({item}) {
    return (
        <div className="item">
            <h3>{item.name}</h3>
            <p>SKU:{item.SKU} </p>
            <p>Color:{item.color}</p>
            <p>Price:${item.price} </p>
            <img src={item.image} alt={`${item.name}`} />
        </div>
    )
}

export default Item;