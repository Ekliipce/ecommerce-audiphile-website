import React, { Component } from 'react';
import { Product } from '../product';
import '../../style/category-component/products-cat.css'

const data = require("../../data.json")

export function Products(props){
    const list_product = data.filter(elm => elm.category == props.category)
    const product = list_product.map((elm) =>  {
        return <Product key={elm.slug}
                     slug={elm.slug}
                     name={elm.name}
                     description={elm.description}
                     isNew={elm.new}
                     imageSource={elm.image.mobile}
                     />
    })
            
    return <div id='products-container'>
        {product}
    </div> 
}
