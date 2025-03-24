import { Router } from "express";
import { midSchemaValidation } from "../middlewares/midValidateSchema.js";
import { rentalSchema } from "../schemas/rentalSchema.js";
import { deleteRental, getRentals, postRentals, returnRentals } from "../controllers/rentalsControllers.js";
const rentalsRouter = Router()

rentalsRouter.post('/rentals',midSchemaValidation(rentalSchema),postRentals)
rentalsRouter.post('/rentals/:id/return',returnRentals)
rentalsRouter.get('/rentals',getRentals)
rentalsRouter.delete('/rentals/:id',deleteRental)
export default rentalsRouter