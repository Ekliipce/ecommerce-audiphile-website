import React from 'react'
import { ButtonShopWhite, ButtonShopBlack } from '../tools-component'
import "../../style/home-component/product-intrig.css"

function ProductIntrigA(){
    return <div className="intrig-container" id="intrigA-container">
        <div id="intrigA-info">
            <h2>zx9 speaker</h2>
            <p>Upgrade to premium speakers that are phenomenally
                 built to deliver truly remarkable sound.
            </p>
            <ButtonShopBlack to='/product/zx9-speaker'/>
        </div>
    </div> 
}

function ProductIntrigB(){
    return <div className="intrig-container" id="intrigB-container">
        <div id="intrigB-info">
            <h2>zx7 speaker</h2>
            <ButtonShopWhite to='/product/zx7-speaker'/>
        </div>
    </div>
}

function ProductIntrigC(){
    return <div class="intrig-container" id="intrigC-container">
        <div id="intrigC-img">
        </div>
        <div>
            <div id ="intrigC-info">
                <h2>yx1 earphones</h2>
                <ButtonShopWhite to='/product/yx1-earphones' />
            </div>
        </div>
    </div>
}

export function Intrig(){
    return <div id="intrig">
        <ProductIntrigA/>
        <ProductIntrigB/>
        <ProductIntrigC/>
    </div>
}