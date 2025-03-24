import { Router } from "express";
import { midSchemaValidation } from "../middlewares/midValidateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import { getUserById, postUser,getUsers } from "../controllers/userControllers.js";
const customersRouter = Router()

customersRouter.post('/customers', midSchemaValidation(userSchema), postUser)
customersRouter.get('/customers/:id', getUserById)
customersRouter.get('/customers', getUsers)


export default customersRouter;