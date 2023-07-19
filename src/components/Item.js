import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [ChangeText, setChangeText] = useState(true);
  function addToRemoveFromCart() {
    setChangeText(!ChangeText);
  }
  const btnText = ChangeText ? "Add to Cart" : "Remove From Cart";
  const liClassName = ChangeText ? "" : "in-cart";
  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToRemoveFromCart}>
        {btnText}
      </button>
    </li>
  );
}

export default Item;
