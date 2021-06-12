import React from 'react'
import DefaultLayout from '../../components/layout/DefaultLayout'
import { DisplayAllProducts } from '../../components/products/DisplayAllProducts'

export const Products = () => {
    return (
        <DefaultLayout>
            <DisplayAllProducts/>
        </DefaultLayout>
    )
}
