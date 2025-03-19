import { getRental } from "../repositories/getRental.js";
import { badRequest } from "../errors/rentalError.js";
import { db } from "../src/database.connection.js";
import status from "http-status";

export async function deleteRental(req,res) {
    let rental = await getRental(req.params.id)
    rental = rental.rows[0]
    if (rental.returnDate == null){
         const message = `you cannot erase rents, which are not paid`
         throw badRequest(message)
    }
    
    await db.query(`DELETE FROM rentals WHERE id = $1`, [req.params.id])
    res.sendStatus(status.OK)
}