import { Router } from "express";
import userRouter from "./userRouter.js";
import gameRouter from "./gameRouter.js";
import rentalsRouter from "./rentalsRouter.js";

const router = Router()

router.use(userRouter)
router.use(gameRouter)
router.use(rentalsRouter)
export default router;