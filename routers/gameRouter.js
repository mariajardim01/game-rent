import { Router } from "express";
import { midSchemaValidation } from "../middlewares/midValidateSchema.js";
import { gameSchema } from "../schemas/gameSchema.js";
import {postGame} from "../controllers/postGame.js";
import { getGames } from "../controllers/getGames.js";

const gameRouter = Router()

gameRouter.post('/games', midSchemaValidation(gameSchema), postGame)
gameRouter.get('/games', getGames)
export default gameRouter;