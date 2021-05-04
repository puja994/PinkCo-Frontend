import React from 'react'
import { HomeLayout } from '../../components/home/HomeLayout'
import DefaultLayout from '../../components/layout/DefaultLayout'

export const Home = () => {
    return (
        <DefaultLayout>
            <div className="home">
                <HomeLayout/>
            </div>
        </DefaultLayout>
    )
}
