import { db } from "../src/database.connection.js";
import dateNow from "../controllers/dateNow.js";

export async function postRentalDB(customerId, gameId ,daysRented, price ) {
    await db.query(
        `INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")  
         VALUES ($1, $2, $3, $4, $5,$6, $7);`,
        [customerId, gameId, dateNow() ,daysRented, null, price , null]
    );

}