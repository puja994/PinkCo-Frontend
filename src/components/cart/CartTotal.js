import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const CartTotal = () => {

    const {cartItemList} = useSelector((state)=>state.cart)

    const totalNumberOfItems = () => {
        let initialCount = 0

        cartItemList.forEach((item)=>{
            initialCount = initialCount + item.qty
        })
        return initialCount
    }

    const totaLAmount = () => {
        let initialPrice = 0
        cartItemList.forEach((item)=> {
            initialPrice = initialPrice + +item.qty * item.price
        })
        return initialPrice
    }


    return (
        <div>
            <h2>Total items: {totalNumberOfItems()}</h2>
            <h2>Total Amount: {totaLAmount()}</h2>
            <Button variant="success">
          <Link to="/checkout">Checkout</Link>
        </Button>
        </div>
    )
}

