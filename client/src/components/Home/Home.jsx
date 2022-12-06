import React from 'react'
import style from './Home.module.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getDogsFast, getTemperaments } from '../../actions';
import Card from '../Card/Card'
import Page from '../Page/Page';
import { SearchBar } from '../SearchBar/SearchBar';
import FilterSection from '../FilterSection/FilterSection';

export default function Home() {

    const dispatch = useDispatch()
    const allDogs = useSelector((state)=>state.dogs)
    const allTemperaments = useSelector((state)=>state.temperaments)
    const [currentPage,setCurrentPage] = useState(1)
    const [dogsPerPage,setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    const page = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getDogs())
        dispatch(getTemperaments())
    },[dispatch])

    const handleClickGetDogsFast = (e) =>{
        e.preventDefault()
        dispatch(getDogsFast())
        setCurrentPage(1)
    }


  return (
    <div className={style.home_container}>
        <SearchBar/>
        <FilterSection allDogs={allDogs} allTemperaments={allTemperaments} handleClickGetDogsFast={handleClickGetDogsFast}/>
        <Page dogsPerPage={dogsPerPage} allDogs={allDogs.length} page={page}/>
        <section className={style.cards_container}>
            {
                currentDogs && currentDogs.map(d=>{
                    return(<Card 
                        image={d.image}
                        name={d.name}
                        min_weight={d.min_weight}
                        max_weight={d.max_weight}
                        min_height={d.min_height}
                        max_height={d.max_height}
                        temperament={d.temperament}
                        key={d.id}
                    />)
                })
            }
        </section>
               
    </div>
  )
}
