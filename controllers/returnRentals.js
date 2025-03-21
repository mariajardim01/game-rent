import { getRental } from "../repositories/rentalsRepository.js";
import { unprocessableEntity } from "../errors/rentalError.js";
import { db } from "../src/database.connection.js";
import dateNow from "./dateNow.js";
import status from "http-status";
import returnValidation from "../services/returnService.js";
import { updateRentals } from "../repositories/rentalsRepository.js";
export async function returnRentals(req,res) {
    let rental =await getRental(req.params.id)
    rental = rental.rows[0]
 

    const delayFee = returnValidation(rental)

    await updateRentals(delayFee, req.params.id)
   

    res.sendStatus(status.OK)
}