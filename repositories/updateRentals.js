import { db } from "../src/database.connection.js"
import dateNow from "../controllers/dateNow.js"
export async function  updateRentals(delayFee, id) {
    await db.query(
        `UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3`,
            [dateNow(), delayFee, id]
    )

}