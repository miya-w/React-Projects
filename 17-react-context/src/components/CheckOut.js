import { useContext } from "react";
import CartContext from "../CartContext";



function Checkout(){
    const {items} = useContext(CartContext)
    return(
        <>
        <h1> Checkout Page</h1>
        <div>
        <div className="product-container" >
            {items.map((item)=>(
                <div className="product-div">
                    <p >
                        {item.name}
                    </p>
                    <p>
                        {item.price}
                    </p>
                </div>
        
            ))}
            </div>
        </div>
        </>
    )
}

export default Checkout