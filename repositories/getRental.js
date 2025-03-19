import { db } from "../src/database.connection.js"
import { notFound } from "../errors/userError.js"

export async function getRental(id) {
    const rentalInDB = await db.query(`SELECT * FROM rentals WHERE id = $1 `, [id])
    
    if (rentalInDB.rowCount == 0){
        const message = `game not found`
        throw notFound(message)
    }

    return rentalInDB
}