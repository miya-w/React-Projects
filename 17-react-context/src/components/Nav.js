import { Link } from "react-router-dom"

//context
import { useContext } from "react";
import CartContext from "../CartContext";


function Nav(){
    // const {item} = useContext(CartContext)
    // console.log(item)
    // console.log(CartContext)

    const {cartItems} = useContext(CartContext)
    return(
        <nav>
            <Link to={"/"}>
                <h1>Logo</h1>
            </Link>
            <Link to={"/checkout"}>
                <div className="cart">
                    <p>Cart</p>
                    <span>({cartItems.length})</span>
                </div>
            </Link>
        </nav>

    );

}


export default Nav