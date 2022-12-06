const { Router } = require('express');
const { DatabaseError } = require('sequelize');
const { Dog, Temperament } = require ('../db');
const postDogCheck = require('../middleware/postDogCheck');

dogsRouter = Router()


dogsRouter.post('/',postDogCheck,async (req,res)=>{
    
    try {
        const { name, min_height,max_height, min_weight, max_weight, life_spam, temperament, image} = req.body;
        const newDog = await Dog.create({name, min_height, max_height, min_weight, max_weight, life_spam, image})
        const temperamentDb = await Temperament.findAll({
            where: {
              name: temperament,
            },
        });
        await newDog.addTemperament(temperamentDb);
        res.status(201).send(newDog)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports= {dogsRouter}
