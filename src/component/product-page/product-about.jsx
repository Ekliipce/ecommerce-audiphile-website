import React from 'react'
import { FeatureBox, Galery, ProductBuy, Proposition } from '../product'

import '../../style/category-component/products-cat.css'
import { CartModal } from '../cart'

const data = require('../../data.json')

export function ProductAbout(props){
    const elm = data.filter(elm => elm.slug == props.product)[0]

    return <div id="product-about">
        <ProductBuy key={elm.slug}
                     slug={elm.slug}
                     name={elm.name}
                     description={elm.description}
                     isNew={elm.new}
                     imageSource={elm.image.mobile}
                     price={elm.price}
                     />

        <FeatureBox features={elm.features}
                    includes={elm.includes}
                    />

        <Galery slug={elm.slug}/>
        
        <Proposition others={elm.others}/>
    </div>
}