import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  const liClass = inCart ? "in-cart" : ""
  const text = inCart ? "Remove From Cart" : "Add to Cart"
 

  function handleClick() {
    setCart((inCart) => !inCart)
    console.log(inCart)
  }
  
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={text} onClick={handleClick}>{text}</button>
    </li>
  );
}


export default Item;
