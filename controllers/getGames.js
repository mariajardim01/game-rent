import { db } from "../src/database.connection.js"
import status from "http-status"
import { getAllGames } from "../repositories/getAllGames.js"

export async function getGames(req,res) {
    const games =  await getAllGames()
    return res.send(games.rows).status(status.OK)
}

