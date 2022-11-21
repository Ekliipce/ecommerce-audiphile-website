import React from 'react'
import { ButtonShopNone } from './tools-component'
import "../style/overview-products.css"

function OverviewProduct(props){
    var img_source = ""
    switch(props.name){
        case 'headphones':
            img_source = require("../assets/shared/desktop/image-category-thumbnail-headphones.png");
            break;
        case 'earphones':
            img_source = require("../assets/shared/desktop/image-category-thumbnail-earphones.png");
            break;
        default:
            img_source = require("../assets/shared/desktop/image-category-thumbnail-speakers.png");
            break;
    }

    return <div className="overview-item">
        <div className='overview-item-img'>
            <img src={img_source}/>
        </div>
        <h3>{props.name}</h3>
        <ButtonShopNone text="shop" to={`/category/${props.name}`}/> 
    </div>
}

export function Overview(){
    const product = ["headphones", "speakers", "earphones"]
    const overview = product.map(elm => <OverviewProduct key={elm} name={elm}/>)
    
    return <div id="overview">{overview}</div> 
}