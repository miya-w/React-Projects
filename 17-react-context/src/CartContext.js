import { createContext,useState } from "react";


const CartContext = createContext();

export function CartProvider({children}){
    const [cartItems, setCartItems]=useState([])

    const addToCart = (name,price, id)=>{
        setCartItems((prevState)=>[...prevState,{name, price,id }])
        console.log(cartItems)
    }

    // const removeFromCart =(name,price,id)=>{
    //     const newArray = cartItems.filter((cartItem) => {
    //         return cartItem.id !== cartItem.id;
    //       });
    //       setCartItems(newArray);
    // }
    const removeFromCart = (name, price, id) => {
        const newArray = cartItems.filter((cartItem) => {
          return cartItem.id !== id;
        });
        setCartItems(newArray);
      }
    const contextValue = {cartItems, addToCart,removeFromCart }

    return(
        // <CartContext.Provider value={{item:3}}>
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>        
    );
}


export default CartContext;