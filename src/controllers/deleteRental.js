import { getRental } from "../repositories/rentalsRepository.js";
import { badRequest } from "../errors/rentalError.js";
import { db } from "../database.connection.js";
import status from "http-status";
import { deleteRentalById } from "../repositories/rentalsRepository.js";

export async function deleteRental(req,res) {
    let rental = await getRental(req.params.id)
    rental = rental.rows[0]
    if (rental.returnDate == null){
         const message = `you cannot erase rents, which are not paid`
         throw badRequest(message)
    }
    
    await deleteRentalById(req.params.id)
    res.sendStatus(status.OK)
}