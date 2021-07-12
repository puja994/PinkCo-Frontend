import React from 'react'
import { CartComp } from '../../components/cart/CartComp'
import { CartTotal } from '../../components/cart/CartTotal'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { useSelector } from "react-redux";

export const Cart = () => {
    const { cartItemList } = useSelector((state) => state.cart)
    return (
        <DefaultLayout>
           <CartComp/>{""}
       {cartItemList.length? <CartTotal/> : "" }    
        </DefaultLayout>
    )
}
