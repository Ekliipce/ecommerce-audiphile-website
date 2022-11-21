import React from'react'
import '../../style/home-component/preview.css'
import { ButtonShopColored } from '../tools-component'

export function Preview(){
    return ( 
        <div id="preview">
            <div id="preview-container">
                <span>new product</span>
                <h1>XX99 Mark II Headphones</h1>
                <p>
                    Experience natural, lifelike audio and exceptional build quality
                    made for the passionate music enthusiast.
                </p>
                <ButtonShopColored text="see product"
                                    color="colored"
                                    to="/product/xx99-mark-two-headphones"/>
            </div> 
        </div>

    )
}