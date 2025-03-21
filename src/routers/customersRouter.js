import { Router } from "express";
import { midSchemaValidation } from "../../middlewares/midValidateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import { postUser } from "../controllers/postUser.js";
import { getUserById } from "../controllers/getUserById.js";
import { getUsers } from "../controllers/getUsers.js";
const customersRouter = Router()

customersRouter.post('/customers', midSchemaValidation(userSchema), postUser)
customersRouter.get('/customers/:id', getUserById)
customersRouter.get('/customers', getUsers)


export default customersRouter;