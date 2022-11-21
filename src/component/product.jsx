import React, { useState, useEffect } from 'react'
import { ButtonShopColored } from './tools-component'
import { AddToCart, CartModal, getStorage, addToStorage } from './cart'
import '../style/product.css'

const data = require("../data.json")

export function useFormat(){
    const [format, setFormat] = useState("desktop")
    window.addEventListener("resize", () => {
        var newFormat = ''

        if (window.innerWidth > 1100)
            newFormat = "desktop"
        else if (window.innerWidth > 500)
            newFormat = "tablet"
        else
            newFormat = "mobile"

        if (newFormat !== format){
            setFormat(newFormat)
        }
    })

    return format
}

export function displayPrice(price){
    let str = price.toString()
    let arr = []
    let mini_arr = []
    for(let i = str.length - 1; i >= 0; i--){
        if ((str.length - i - 1) % 3 == 0){
            arr.push(mini_arr)
            mini_arr = []
        }
        mini_arr.push(str[i])
    }
    arr.push(mini_arr)

    let newstr = "$ "
    for (let i = arr.length - 1; i >= 0 ; i--){
        for (let j = arr[i].length - 1; j >= 0 ; j--){
            newstr += arr[i][j]
        }

        if (i != 0 && i != 1)
            newstr += ','
    }
    return newstr
}

export function Product(props){
    const new_product = props.isNew ? 
        <span className="new_product">new product</span> : null

    return <div className="product" id={props.slug}>
        <div className="product-img">
            <img src={require(`../assets/product-${props.slug}/desktop/image-product.jpg`)}/>
        </div>

        <div className="product-info">
            {new_product}
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <ButtonShopColored text="see product" color="colored" to={`/product/${props.slug}`} class=""/>
        </div> 
    </div>
}

export function ProductBuy(props){
    const [show, setShow] = useState(false)
    const [cart_elm, setCart] = useState(getStorage())
    const [price, setPrice] = useState(props.price)
    const format = useFormat()
    const img = require(`../assets/product-${props.slug}/${format}/image-product.jpg`)
    
    const new_product = props.isNew ? 
        <span className="new_product">new product</span> : null

    return <div className="product product-buying" id={props.slug}>
        <div className="product-img">
            <img src={img}/>
        </div>

        <div className="product-info-buying">
            {new_product}
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="product-price">{displayPrice(price)}</div>
            <AddToCart change={setShow}
                       setCart={setCart} 
                       cart_item={cart_elm}
                       item_slug={props.slug} 
                       setPrice={setPrice}
                       price={props.price} />
            <CartModal show={show} change={setShow} cart_item={cart_elm}/>
        </div> 
    </div>
}

export function FeatureBox(props){
    const includes = props.includes.map((elm) => {
        return <li> 
            <span className='box-quantity'>{elm.quantity}</span>
            <span className='box-item'>{elm.item}</span>
        </li>
    })

    const texts = props.features.split('\n\n').map((elm) => {
        return <p>{elm}<br></br></p>
    })

    return <div className="feature-box-container">
        <div className="feature">
            <h2>Features</h2>
            <div className="feature-text">{texts}</div>
        </div>
        <div className="box">
            <h2>In the box</h2>
            <ul>{includes}</ul>
        </div>
    </div>
}

export function Galery(props){
    const format = useFormat()
    const imgGalery1 = require(`../assets/product-${props.slug}/${format}/image-gallery-1.jpg`)
    const imgGalery2 = require(`../assets/product-${props.slug}/${format}/image-gallery-2.jpg`)
    const imgGalery3 = require(`../assets/product-${props.slug}/${format}/image-gallery-3.jpg`)


    return <div id="galery-container">
        <div className="galery" id="galery-part-1">
            <div>
                <img src={imgGalery1}/>
            </div>
            <div>
                <img src={imgGalery2}/>
            </div>
        </div>
        <div className="galery" id="galery-part-2">
            <img src={imgGalery3}/>
        </div>
    </div>
}

export function Proposition(props){
    const format = useFormat()
    const others = props.others.map((elm) => {
        const img = require(`../assets/shared/${format}/image-${elm.slug}.jpg`)
        return  <div class="proposition-item">
                    <div class="proposition-img">
                        <img src={img}/>
                    </div>
                    <h3>{elm.name}</h3>
                    <ButtonShopColored to={`/product/${elm.slug}`}/>
                </div>
    })

    return <div id="proposition-container">
        <h2>you may also like</h2>
        <div id="proposition-item-container">
            {others}
        </div>
    </div>
}