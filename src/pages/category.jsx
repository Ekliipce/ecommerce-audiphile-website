import React from 'react'
import { About } from '../component/about'
import { Navbar } from '../component/navbar'
import { Overview } from '../component/overview-products'
import { Footer } from '../component/footer'
import { HeaderCat } from '../component/category-component/header-cat'
import { Products } from '../component/category-component/products-cat'
import { ScrollToTop } from '../scroll'

export function Category(props){
    return <div>
        <ScrollToTop/>
        <Navbar />
        <HeaderCat title={props.category}/>
        <Products category={props.category}/>
        <Overview />
        <About/>
        <Footer/>
    </div>
}