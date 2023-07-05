import React, { useState } from "react";

function Item({ name, category }) {
  const [itemClass, setItemClass] = useState("");
  const [buttonClass, setButtonClass] = useState("add");

  function handleItemClass() {
    if (itemClass === "") {
      setItemClass("in-cart");
      name = "Remove from Cart";
    } else {
      setItemClass("");
      name = "Add to Cart";
    }
  }

  function handleButtonClass() {
    if (buttonClass === "add") {
      setButtonClass("remove");
    } else {
      setButtonClass("add");
    }
  }

  const buttonText = buttonClass === "add" ? "Add to Cart" : "Remove From Cart";

  return (
    <li className={itemClass} onClick={handleItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleButtonClass}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
