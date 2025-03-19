import { Router } from "express";
import { midSchemaValidation } from "../middlewares/midValidateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import { postUser } from "../controllers/postUser.js";
import { getUserById } from "../controllers/getUserById.js";
import { getUsers } from "../controllers/getUsers.js";
const userRouter = Router()

userRouter.post('/users', midSchemaValidation(userSchema), postUser)
userRouter.get('/users/:id', getUserById)
userRouter.get('/users', getUsers)


export default userRouter;