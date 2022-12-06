const { Router } = require('express');
const { getTemperaments } = require('../controlers/controler');

temperamentsRouter = Router()

temperamentsRouter.get('/', async (req,res) =>{

    let data = await  getTemperaments()

    try{
        return res.status(200).send(data)
    }catch(error){
        return res.status(400).send(error.message)
    }
})

module.exports={
    temperamentsRouter
}