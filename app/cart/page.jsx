"use client"
import React from "react"
import { useState } from "react";

const Cart = () => {
  
  const [cart,setCart]=useState(() => {
  const items = localStorage.getItem("RepliqCart")
  const cartItems = JSON.parse(items)
  return cartItems || []
})

  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto">
        
        <h1 className="text-4xl">This is the cart page</h1>
        


      </div>
    </div>
  );
};

export default Cart;
