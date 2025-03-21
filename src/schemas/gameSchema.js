import Joi from "joi"

export const gameSchema = Joi.object({
    name: Joi.string().required().max(500),
    image: Joi.string().max(1000).required(),
    stockTotal: Joi.number().min(0).required(),
    pricePerDay: Joi.number().min(0).required(),

})