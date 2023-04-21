import { createContext,useState } from "react";


const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems]=useState([])

    const addToCart = (name,price)=>{
        setItems((prevState)=>[...prevState,{name, price}])
    }

    return(
        // <CartContext.Provider value={{item:3}}>
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>        
    );
}


export default CartContext;