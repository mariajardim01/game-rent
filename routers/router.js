import { Router } from "express";
import customersRouter from "./customersRouter.js";
import gameRouter from "./gameRouter.js";
import rentalsRouter from "./rentalsRouter.js";

const router = Router()

router.use(customersRouter)
router.use(gameRouter)
router.use(rentalsRouter)
export default router;