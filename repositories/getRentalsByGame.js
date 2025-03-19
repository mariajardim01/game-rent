import { db } from "../src/database.connection.js";

export async function getRentalsByGame(gameId) {
 
    const rentalInDB = await db.query(`SELECT * FROM rentals WHERE "gameId" = $1 `, [gameId])
    return rentalInDB
}