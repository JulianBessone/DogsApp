import React from 'react'
import style from './Card.module.css'

function Card({name,min_weight,max_weight,min_height,max_height,image,temperament}) {
  return (
    <div className={style.card_container}>
        <img src={image} alt='img not found' ></img>
        <h3>{name}</h3>
        <p><span>MIN WEIGHT:</span> {min_weight}</p>
        <p><span>MAX WEIGHT:</span> {max_weight}</p>
        <p><span>MIN HEIGHT:</span> {max_height}</p>
        <p><span>MAX HEIGHT:</span> {max_height}</p>
        <p><span>TEMPERAMENT:</span> {temperament}</p>
    </div>
  )
}

export default Card