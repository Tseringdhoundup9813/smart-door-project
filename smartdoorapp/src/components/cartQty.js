import React from 'react';
import { useState, useEffect } from 'react';

export default function CartQty() {
    const [qty, setQty]=useState(1);
    const cartplus=()=>{
        setQty(qty + 1)
    }
    const cartminus=()=>{
        if (qty>1){
            setQty(qty - 1);
        }else{
            setQty(1)
        }
    }
  return (
        <div className="cart-product-quantity d-flex align-items-center">
            <div className="text-uppercase">qty:</div>
            <div className="cart-product-incerase align-items-center ">
                <div className="cart-product-minus" onClick={cartminus}><i class="fa-solid fa-minus"></i></div>
                <div className="cart-product-number">{qty} </div>
                <div className="cart-product-plus" onClick={cartplus}><i class="fa-solid fa-plus"></i></div>
            </div>
        </div>
  )
}
