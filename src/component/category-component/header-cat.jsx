import React from 'react'
import '../../style/category-component/header-cat.css'

export function HeaderCat(props){
    return <div className="header-cat">
            <h1>{props.title}</h1>
        </div>
}

