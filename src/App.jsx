import React from 'react'
import { Home } from './pages/home'
import { Category } from './pages/category'
import { ProductPage } from './pages/product-page'
import { Route, Routes } from 'react-router-dom'
import { CheckoutPage } from './pages/checkout-page'

const data = require('./data.json')

export function App(){
    localStorage.setItem('cart', JSON.stringify([]));
    
    const routes_category = ['headphones', 'earphones', 'speakers'].map((elm) => {
        return <Route path={`/category/${elm}`} element={<Category category={elm}/>} />
    })
    const routes_product = data.map((elm) => {
        return <Route path={`/product/${elm.slug}`} 
                    element={<ProductPage product={elm.slug}/>} />
    })

    return (<div>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossOrigin="anonymous"
        />

        <Routes>
            <Route path='/' element={<Home/>}/>
            {routes_category}
            {routes_product}
            <Route path='/checkout' element={<CheckoutPage/>}/>
        </Routes>
    </div>
        
    )
}
