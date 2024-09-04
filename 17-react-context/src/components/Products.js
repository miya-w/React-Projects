// import { useState } from "react"
import Card from "./Card";

// import { useContext } from "react";
// import { CartProvider } from "../CartContext";


function Products(){
    const products=[
        {id:"1",name: "Vest", price:"50"},
        {id:"2",name: "Jean", price:"200"},
        {id:"3",name: "Jacket", price:"150"},
        {id:"4",name: "T-Shirt", price:"20"},
        {id:"5",name: "Jumper", price:"100"},
        {id:"6",name: "Beannie", price:"20"}
    ];



        return(
            
            <div className="container">
                <h1> Product Page</h1>
                <div className="product-container">
                {products.map((product)=>(
                    <Card 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                    />
                ))}
                </div>
            </div>
        )
}

export default Products