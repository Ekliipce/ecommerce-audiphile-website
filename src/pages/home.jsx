import React from 'react'
import { Navbar } from '../component/navbar'
import { Preview } from '../component/home-component/preview '
import { Overview } from '../component/overview-products'
import { Intrig } from '../component/home-component/product-intrig'
import { About } from '../component/about'
import { Footer } from '../component/footer'
import { ScrollToTop } from '../scroll'


export function Home(){
    return <div>
            <ScrollToTop/>
            <Navbar />
            <Preview />
            <Overview />
            <Intrig/>
            <About/>
            <Footer />
        </div>
}