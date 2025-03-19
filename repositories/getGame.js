import { db } from "../src/database.connection.js"
import { notFound } from "../errors/userError.js"

export async function getGame(id) {
    const gameInDB = await db.query(`SELECT * FROM games WHERE id = $1 `, [id])
    
    if (gameInDB.rowCount == 0){
        const message = `game not found`
        throw notFound(message)
    }

    return gameInDB
}