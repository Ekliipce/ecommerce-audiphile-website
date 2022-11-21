import React, { useState, useEffect } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import { displayPrice } from './product';
import Modal from 'react-bootstrap/Modal';

import '../style/tools-component.css'
import '../style/cart.css'

const data = require("../data.json")

export function getStorage(){
    const cart = localStorage.getItem('cart')
    return (cart) ? JSON.parse(cart) : []
}

export function addToStorage(elm){
    var cart = getStorage()
    cart.push(elm)
    localStorage.setItem('cart', JSON.stringify(cart))
}    

export function addItem(element_to_add, nbr){
    var cart_elm = getStorage()
    var find = cart_elm.find(elm => element_to_add.slug == elm.slug)
    if (find){
        find.nbr_into_cart += nbr
    }else{
        element_to_add.nbr_into_cart = nbr
        cart_elm.push(element_to_add)
    }
    localStorage.setItem('cart', JSON.stringify(cart_elm))
}

export function removeItem(element_to_remove, nbr){
    var cart_elm = getStorage()
    var find = cart_elm.find(elm => element_to_remove.slug == elm.slug)
    if (find){
        if (find.nbr_into_cart > 1)
            find.nbr_into_cart -= 1
        else
            cart_elm = cart_elm.filter(elm => find.slug != elm.slug)
    }
    localStorage.setItem('cart', JSON.stringify(cart_elm))
}

export function AddToCart(props){
    const item = data.find(elm => elm.slug == props.item_slug)
    const [nbr_item, setNbrItem] = useState(1)
    
    useEffect(() => {
        props.setPrice(props.price * nbr_item)
    }, [nbr_item])
    
    const handleClick = () => {
        addItem(item, nbr_item)
        props.change(true)
    }
    
    return <div id="add-to-cart"> 
        <ButtonCounter setNbrItem={setNbrItem}/>
        <ButtonAdd handle={handleClick} />
    </div>
}

export function ButtonCounter(props){
    const [number, setNumber] = useState(1)

    useEffect(()=>{
        if (props.nbr_cart)
            setNumber(props.nbr_cart)
    }, [])

    function handleMinus(){
        if (number != 0)
            setNumber(number => number - 1);
            
        if (props.setNbrItem)
            props.setNbrItem(number => number - 1);
        if (props.remove)
            props.remove()
    }

    function handlePlus(){
        setNumber(number => number + 1);
        if (props.setNbrItem)
            props.setNbrItem(number => number + 1);
        if (props.add)
            props.add()
    }

    return  <div className="button-shop counter">
                <div className="button-counter" onClick={handleMinus}>-</div>
                <div>{number}</div>
                <div className="button-counter"onClick={handlePlus}>+</div>
            </div>
}

export function ButtonAdd(props){
    const classes = `button-shop colored`
    return <button className={classes} onClick={props.handle}>
            add to cart</button>
}

export function ButtonCheckout(props){
    const classes = `button-shop colored button-checkout`
    return <Link to={props.to}>
        <button className={classes}>checkout</button>
    </Link>
}

function CartItem(props){
    const img = require(`../assets/cart/image-${props.slug}.jpg`)
    const item = data.find(elm => elm.slug == props.slug)
    const total = props.price

    const add = () => {
        addItem(item, 1)
        props.setCart(storage => getStorage())
    }

    const remove = () => {
        removeItem(item, 1)
        props.setCart(storage => getStorage())
    }

    return <div className="cart-item">
        <div className='cart-item-img'>
            <img src={img}/>
        </div>

        <div className='cart-item-id'>
            <div className='cart-item-name'>{props.name}</div> 
            <div className='cart-item-price'>{displayPrice(props.price)}</div> 
        </div>

        <ButtonCounter nbr_cart={props.nbr_cart} add={add} remove={remove}/>
    </div>
}

export function CartModal(props){
    const [storage, setStorage] = useState(getStorage())
    let store = getStorage()
    const cart_display = store.map(elm => 
                                    <CartItem slug={elm.slug}
                                              name={elm.name}
                                              price={elm.price}
                                              nbr_cart={elm.nbr_into_cart} 
                                              setCart={setStorage}/>)

    let price = 0
    let number_item = 0
    if (store.length != 0){
        number_item = store.map(elm => elm.nbr_into_cart)
                                        .reduce((elm1, elm2) => {
                                                return (elm2) ? elm1 + elm2 : elm1
                                            });
                                                         
        price = store.map(elm => elm.price*elm.nbr_into_cart)
                                .reduce((elm1, elm2) => {
                                        return (elm2) ? elm1 + elm2 : elm1
                                    });
    }
    localStorage.setItem('total', JSON.stringify(price))

    const clear = () => {
        localStorage.setItem('cart', [])
        setStorage([])
    }

    return  <Modal  show={props.show}
                    onHide={() => props.change(false)}
                    backdrop={true}>
                <Modal.Body>
                    <div id='header-modal'>
                        <div id='header-cart'>cart ({number_item})</div>
                        <button onClick={clear}>Remove all</button> 
                    </div>
                    
                    {cart_display}

                    <div className='modal-total'>
                        <div className='modal-total-tot' >Total</div>
                        <div className='modal-price'>{displayPrice(price)}</div>
                    </div>

                    <ButtonCheckout to="/checkout"/>
                </Modal.Body>
            </Modal>
}