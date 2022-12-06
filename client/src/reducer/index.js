const initialState = {
    dogs : [],
    allDogsConstant : [],
    temperaments:[]
}

function rootReducer (state = initialState,action){
    switch(action.type){
        case "GET_DOGS":
            return{
                ...state,
                dogs: action.payload,
                allDogsConstant: action.payload
            }
        case "GET_DOGS_FAST":
            return{
                ...state,
                dogs: state.allDogsConstant
            }
        case "GET_DOGS_BY_NAME":
            return{
                ...state,
                dogs: action.payload
            }
        case "GET_DOGS_DB":
            return{
                ...state,
                dogs: action.payload
            }
        case "GET_DOGS_API":
            return{
                ...state,
                dogs: action.payload
            }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperaments: action.payload
            }
        case "FILTER_BY_TEMPERAMENTS":
            const allDogs = state.allDogsConstant
            const dogsFilteredByTemps = (action.payload === "Todos") ?allDogs :allDogs.filter(dog => dog.temperament.toLowerCase().includes(action.payload.toLowerCase()) === true)

            return{
                ...state,
                dogs: dogsFilteredByTemps
            }
        default:
            return state
    }
}

export default rootReducer