

// Context
import { useContext, useState } from "react";
import CartContext from "../CartContext";


function Card({name, price}){
  const {addToCart} = useContext(CartContext)

    return(
      <div>
        <div className="product-div">
            <h2>Product</h2>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
        <div>
            ${price}
        </div>
        <button onClick={()=>addToCart(name, price)}>Buy It</button>
      </div>
    )
}

export default Card