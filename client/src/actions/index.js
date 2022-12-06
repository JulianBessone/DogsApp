import axios from 'axios'

export function getDogs(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/breeds")
        return dispatch({
            type: "GET_DOGS",
            payload: json.data
        })
    }  
}

export function getDogsByName(name){
    return async function(dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/breeds/?name=${name}`)
            return dispatch({
            type: "GET_DOGS_BY_NAME",
            payload: json.data
        })
        } catch (error) {
            return alert(error.response.data)
        }  
    }
}

export function getDogsDb(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/breeds")
        let data = await json.data.filter(dog => dog.is_own)
        console.log(json.data)
        return dispatch({
            type: "GET_DOGS_DB",
            payload: data
        })
    }  
}
export function getDogsApi(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/breeds")
        let data = await json.data.filter(dog => !dog.is_own)
        
        return dispatch({
            type: "GET_DOGS_API",
            payload: data
        })
    }  
}

export function getTemperaments(){
    return async function(dispatch){
        let json = await axios.get("http://localhost:3001/temperaments")
        
        return dispatch({
            type: "GET_TEMPERAMENTS",
            payload: json.data
        })
    }
}

export function filterByTemperaments(payload){
    return{
        type: "FILTER_BY_TEMPERAMENTS",
        payload
    }
}

export function getDogsFast(payload){
    return{
        type: "GET_DOGS_FAST",
        payload
    }
}