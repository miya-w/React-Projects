import { useContext } from "react";
import CartContext from "../CartContext";



function Checkout(){
    const {cartItems, removeFromCart} = useContext(CartContext)
    return(
        <>
        <h1> Checkout Page</h1>
        <div>
        <div className="product-container" >
            {cartItems.map((cartItem)=>(
                <div className="product-div" key={cartItem.id}>
                    <p >
                        {cartItem.name}
                    </p>
                    <p>
                        {cartItem.price}
                    </p>
                    <button click={removeFromCart}>remove</button>
                </div>
        
            ))}
            </div>
        </div>
        </>
    )
}

export default Checkout