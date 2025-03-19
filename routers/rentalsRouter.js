import { Router } from "express";
import { midSchemaValidation } from "../middlewares/midValidateSchema.js";
import { rentalSchema } from "../schemas/rentalSchema.js";
import { postRentals } from "../controllers/postRentals.js";
import { getRentals } from "../controllers/getRentals.js";
import { returnRentals } from "../controllers/returnRentals.js";
import { deleteRental } from "../controllers/deleteRental.js";
const rentalsRouter = Router()

rentalsRouter.post('/rentals',midSchemaValidation(rentalSchema),postRentals)
rentalsRouter.post('/rentals/:id/return',returnRentals)
rentalsRouter.get('/rentals',getRentals)
rentalsRouter.delete('/rentals/:id',deleteRental)
export default rentalsRouter