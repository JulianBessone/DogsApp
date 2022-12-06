const postDogCheck = (req,res,next) => {
    const { name, min_height,max_height, min_weight, max_weight, life_spam, temperament, image} = req.body;

    if(!name) return res.status(400).send({ error: "Debes ingresar un nombre" });
    if(!temperament) return res.status(400).send({ error: "Debes ingresar al menos un temperamento" });

    next()
};

module.exports = postDogCheck