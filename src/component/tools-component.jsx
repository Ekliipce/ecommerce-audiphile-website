import React, { useState, useEffect } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'
import '../style/tools-component.css'

export function ButtonShopColored(props){
    const text = (props.text) ? props.text : "see product"
    const classes = `button-shop colored ` + props.class
    const path = useResolvedPath(props.to)

    return <Link to={path}>
        <button className={classes}>{text}</button>
    </Link>
}

export function ButtonShopBlack(props){
    const text = (props.text) ? props.text : "see product"
    const classes = `button-shop black`
    const path = useResolvedPath(props.to)

    return <Link to={path}>
        <button className={classes}>{text}</button>
    </Link>
}

export function ButtonShopWhite(props){
    const text = (props.text) ? props.text : "see product"
    const classes = `button-shop white`
    const path = useResolvedPath(props.to)

    return <Link to={path}>
        <button className={classes}>{text}</button>
    </Link>
}

export function ButtonShopNone(props){
    const text = (props.text) ? props.text : "see product"
    const path = useResolvedPath(props.to)

    return <Link to={path}>
        <button className='button-shop none'>
            <span>{text}</span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        </button> 
    </Link>
}

export function NavList(){
    const list_link = ['home', 'headphones', 'speakers', 'earphones']
    const nav_link_container = list_link.map((elm) => {
        if (elm == "home")
            return <li key={elm}><Link to={'/'}>{elm}</Link></li>
        else
            return <li key={elm}><Link to={`/category/${elm}`}>{elm}</Link></li>
    })

    return <ul className='nav-link-container'>
        {nav_link_container}
    </ul> 
}


