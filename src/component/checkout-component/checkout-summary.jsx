import Recat, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import '../../style/checkout-component/checkout-summary.css'
import { getStorage } from "../cart"
import { displayPrice } from "../product"
import { ButtonShopColored } from "../tools-component"

function Item(props){
    const img = require(`../../assets/cart/image-${props.slug}.jpg`)
    const price = displayPrice(props.price)

    return <div className="item-product-summary"> 
        <div className='cart-item-img'>
            <img src={img}/>
        </div>

        <div className='cart-item-id'>
            <div className='cart-item-name'>{props.name}</div> 
            <div className='cart-item-price'>{price}</div> 
        </div>

        <div className="quantity-products">
            x{props.quantity}
        </div>
    </div>
}

function ProductSummary(){
    const storage = getStorage()
    const items = storage.map(elm => <Item name={elm.name}
                                           slug={elm.slug}
                                           price={elm.price}
                                           quantity={elm.nbr_into_cart}/>)
    return <div className="product-summary">
        {items}
    </div>
}

function calculNbrItem(){
    const storage = getStorage()
    let nbrItems = 0
    for (var i = 1; i < storage.length; i++){
        nbrItems += storage[i].nbr_into_cart
    }

    return nbrItems
}

export function CheckoutSummary(){
    const storage = getStorage()
    const nbrItems = calculNbrItem()
    const [show, setShow] = useState(false)
    const [showItems, setItems] = useState("unique")
    const [textShow, setText] = useState(`and ${nbrItems} other item(s)`)
    let price = displayPrice(localStorage.getItem('total'))

    const handleClick = () => {
        if (!show) setShow(true)
        else setShow(false)
    }

    const viewItems = () => {
        if (showItems == "all"){
            setItems("unique")
            setText(`and ${nbrItems} other item(s)`)
        }else{
            setItems("all")
            setText("View less")
        }
    }

    let first_product = null
    if (storage[0] != null){
        first_product = <Item name={storage[0].name}
                                slug={storage[0].slug}
                                price={storage[0].price}
                                quantity={storage[0].nbr_into_cart}/>
    }
    
    const list_items = (showItems == "unique") ? first_product : <ProductSummary/>

    return <div id="checkout-summary">
        <h3>summary</h3>
        <ProductSummary/>
        <div className='modal-total' id="checkout-summary-total">
            <div className='modal-total-tot' >Total</div>
            <div className='modal-price'>{price}</div>
        </div>
        <button className='button-shop colored button-checkout' 
                onClick={handleClick}>
            continue & pay
        </button>

        <Modal show={show}
               backdrop={true} 
               onHide={()=>{
                            setShow(false)
                            setItems("unique")
                            setText(`and ${nbrItems} other item(s)`)
            }}>
            <Modal.Body>
                <div id="modal-order">
                    <svg id="svg-order" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
                    <h1>Thank you</h1> 
                    <h1>for your order</h1>
                    <p>You will receive an email confirmation shortly.</p>
                    <div id="receipt">
                        <div id="receipt-products">
                            {list_items}
                            <div id="receipt-show">
                                <span onClick={viewItems}>{textShow}</span>
                            </div>
                        </div>
                        <div id="receipt-total">
                            <h5>grand total</h5>
                            <span>{price}</span> 
                        </div>
                    </div>
                </div>
                <ButtonShopColored to="/" class="plain" text="back to home"/>
            </Modal.Body>
        </Modal>
    </div>
}