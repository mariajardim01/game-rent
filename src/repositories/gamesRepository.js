import { db } from "../database.connection.js";
import { notFound } from "../errors/userError.js";

export async function getAllGames() {
    const games = await db.query(`SELECT * FROM games`);
    return games;
}

export async function getGame(id) {
    const gameInDB = await db.query(`SELECT * FROM games WHERE id = $1 `, [id]);
    
    if (gameInDB.rowCount == 0) {
        const message = `game not found`;
        throw notFound(message);
    }
    
    return gameInDB;
}

export async function postGameDB(name, image, stockTotal, pricePerDay) {
    await db.query(
        `INSERT INTO games (name, image, "stockTotal", "pricePerDay")
         VALUES ($1, $2, $3, $4);`,
        [name, image, stockTotal, pricePerDay]
    );
}