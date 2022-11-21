import React from 'react'
import { CheckoutContainer } from '../component/checkout-component/checkout-container'
import { Footer } from '../component/footer'
import { Navbar } from '../component/navbar'

export function CheckoutPage(){
    return <>
        <Navbar/>
        <CheckoutContainer/>
        <Footer/>
    </>
}