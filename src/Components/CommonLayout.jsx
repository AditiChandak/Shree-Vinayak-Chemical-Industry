import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './common/Header'
import Footer from './common/Footer'

export default function CommonLayout() {
    return (
        <>
            <div className='max-w-full flex'>
                <div className='w-full justify-stretch'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}
