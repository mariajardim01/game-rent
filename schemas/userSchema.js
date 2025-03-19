import Joi from "joi"

export const userSchema = Joi.object({
    name: Joi.string().required().max(500),
    phone: Joi.string().required().max(500),
    cpf: Joi.string().required()


})