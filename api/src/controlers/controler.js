const axios = require('axios');
const { Dog, Temperament} = require('../db')
const {
    YOUR_API_KEY
} = process.env;


////******* FUNCION PARA LLAMAR LA DATA DE LA API Y DB ******///////
const getBreeds = async () =>{
    let breeds = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
        .then(r => r.data)
    let breedsApi = await breeds.map(d =>{
        return{
            id: d.id,
            name: d.name,
            min_weight: d.weight.metric.split("-")[0].trim(),
            max_weight: d.weight.metric.split("-").reverse()[0].trim(),
            min_height: d.height.metric.split("-")[0].trim(),
            max_height: d.height.metric.split("-").reverse()[0].trim(),
            life_span: d.life_span,
            temperament: (!d.temperament) ?"Null" :d.temperament,
            image: d.image.url
        }
    })
    // let localBreeds = llamar breeds de la db local
    let breedsDb = await Dog.findAll({atributes:['id','name','min_height','max_height','min_weight','max_weight','life_years'],
        include:{
            model: Temperament,
            attributes: ['name'],
            through: {attributes: []}
        }    
    })
    breedsDb = await breedsDb.map((d) => {
        return {
          id: d.id,
          is_own: d.is_own,
          name: d.name,
          min_weight: d.min_weight,
          max_weight: d.max_weight,
          min_height: d.min_height,
          max_height: d.max_height,
          life_span: d.life_span,
          image: d.image,
          temperament: d.temperaments
            .map((t) => {
              return t.name;
            })
            .join(", "),
        };
      });

    let data = [...breedsDb,...breedsApi]
    return data
    
}

////******* FUNCION PARA LLAMAR LOS TEMPERAMENTS DE LA API Y DB******///////

const getTemperaments = async ()=>{
    let apiGet = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
    const apiInfo = await apiGet.data;
    let temperaments = apiInfo.map(d => d.temperament).join().split(',').sort()

    temperaments = await temperaments
    .map(t => {
        Temperament.findOrCreate({
            where: {
              name: t.trim(),
            },
        })
    });
    let allTemperaments = await Temperament.findAll({ order: [["name"]] });
    allTemperaments.shift()
    return allTemperaments;
};

module.exports = { getBreeds, getTemperaments }

