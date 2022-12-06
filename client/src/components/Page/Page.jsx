import React from 'react'
import style from './Page.module.css'

export default function Page({dogsPerPage, allDogs, page}) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <nav className={style.nav_page_container}>
        <ul>
            {pageNumbers && pageNumbers.map(number=>{
                return(
                    <li key={number}>
                    <a onClick={()=> page(number)}>{number}</a>
                    </li> 
                )
            })}
        </ul>
    </nav>
  )
}
