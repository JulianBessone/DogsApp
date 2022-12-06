const { Router } = require("express");
const { getBreeds } = require('../controlers/controler')


breedsRouter = Router()

breedsRouter.get('/', async (req,res)=>{

    const { name } = req.query;
    const { id } = req.body;
    let data = await  getBreeds()

    if(name){
        data = await data.filter((dog)=> dog.name.toLowerCase().includes(name.toLowerCase()) === true)  

        if(data.length === 0){
            return res.status(400).send('*** No se encontro una raza que incluya tu cadena de texto en su nombre ***')
        }
    }
    if(id){
        data = await data.find(dog => dog.id === id)
    }

    try{
        return res.status(200).send(data)
    }catch(error){
        return res.status(400).send(error.message)
    }
})




//https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

module.exports = {breedsRouter}