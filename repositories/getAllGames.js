import { db } from "../src/database.connection.js"
import status from "http-status"

export async function getAllGames() {
    const games = await db.query(`SELECT * FROM games`)
    return games
}
