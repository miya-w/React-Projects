// import { useState } from "react"
import Card from "./Card";

// import { useContext } from "react";
// import { CartProvider } from "../CartContext";


function Products(){
    const products=[
        {name: "Vest", price:"50"},
        {name: "Jean", price:"200"},
        {name: "Jacket", price:"150"},
        {name: "T-Shirt", price:"20"},
        {name: "Jumper", price:"100"},
        {name: "Beannie", price:"20"}
    ];



        return(
            
            <div className="container">
                <h1> Product Page</h1>
                <div className="product-container">
                {products.map((product)=>(
                    <Card 
                        name={product.name}
                        price={product.price}
                    />
                ))}
                </div>
            </div>
        )
}

export default Products