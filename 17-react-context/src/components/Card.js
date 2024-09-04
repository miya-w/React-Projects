// Context
import { useContext } from "react";
import CartContext from "../CartContext";

function Card({ name, price, id }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="product-div" key={id}>
        <h2>Product</h2>
        <div>
          <h3>{name}</h3>
        </div>
        <div>${price}</div>
        <button onClick={() => addToCart(name, price)}>Buy It</button>
      </div>
    </div>
  );
}

export default Card;
