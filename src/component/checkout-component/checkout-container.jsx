import React from 'react'
import { CheckoutSummary } from './checkout-summary'
import '../../style/checkout-component/checkout-container.css'
import { CheckoutForm } from './checkout-form'

export function CheckoutContainer(){
    return <div id="checkout-container">
        <CheckoutForm/>
        <CheckoutSummary/>
    </div>
}