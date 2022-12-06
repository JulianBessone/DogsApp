import React from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from '../../actions';
import style from './SearchBar.module.css'

export function SearchBar(){

    const dispatch = useDispatch()


    const handleChangeSearch = (e) =>{
        e.preventDefault()
        dispatch(getDogsByName(e.target.value))
    }

    return(
        <section className={style.buscador_container}>
            <form>
                <input type='text' placeholder="Busca un Doggie..." autoComplete={"off"} onChange={e=>handleChangeSearch(e)}></input>
                <button>Buscar</button>
            </form>   
        </section>
    )
}