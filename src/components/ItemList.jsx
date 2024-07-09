import React from "react";
import Item  from './Item';

function ItemList({items, price}){
    const FilterPrice = price === null ? items : items.filter(item => item.price <= price)

    if (FilterPrice.length === 0){
        return <p>No products match the filter criteria.</p>;

    }
    return (
        <div>
            {FilterPrice.map((item, index) => (
                <Item key={index} item={item}/>
            ))}
        </div>
    )
}

export default ItemList;