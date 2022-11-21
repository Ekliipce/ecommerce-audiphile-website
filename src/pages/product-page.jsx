import React from 'react'
import { About } from '../component/about'
import { Navbar } from '../component/navbar'
import { Overview } from '../component/overview-products'
import { Footer } from '../component/footer'
import { ProductAbout } from '../component/product-page/product-about'
import { ScrollToTop } from '../scroll'


export function ProductPage(props){
    return <div>
        <ScrollToTop/>
        <Navbar />
        <ProductAbout product={props.product}/>
        <Overview />
        <About/>
        <Footer/>
    </div>
}