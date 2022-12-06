import React from 'react'
import style from './FilterSection.module.css'
import { getDogsApi, getDogsDb, filterByTemperaments } from '../../actions'
import { useDispatch } from 'react-redux'

export default function FilterSection({ allTemperaments, handleClickGetDogsFast}){

    const dispatch = useDispatch()
    

    const handleClickDogsDb = (e) =>{
        e.preventDefault()
        dispatch(getDogsDb())
    }
    const handleClickDogsApi = (e) =>{
        e.preventDefault();
        dispatch(getDogsApi())
    }
    const handleClickTemperaments = async (e) =>{
        dispatch(filterByTemperaments(e.target.value))
    }

    return(
        <section className={style.filter_section_container}>
            <div className={style.botones_container}>
                <button onClick={e=>handleClickDogsApi(e)}>Unicamente Dogs de la API</button>
                <button onClick={e=>handleClickDogsDb(e)}>Unicamente Dogs Creados</button>
            </div>
            <div className={style.botones_container_sort}>
                <button>Aa-Zz</button>
                <button>Zz-Aa</button>
                <button>Peso ⬆</button>
                <button>Peso ⬇</button>
            </div>
            <div className={style.filter_temperament}>
                <p>Filtrar por Temperamento:</p>
                <select onChange={e=> handleClickTemperaments(e)} className={style.filter_temperament_select}>
                    <option value="Todos">Todos</option>
                    {
                        allTemperaments.map(temp =>{
                            return(
                                <option value={`${temp.name}`} key={temp.id}>{`${temp.name}`}</option>
                            )
                        })
                    }
                </select>
            </div>

            <button onClick={e =>handleClickGetDogsFast(e)} className={style.button}>Volver a cargar todos los Dogs</button>   
        </section>
    )
}