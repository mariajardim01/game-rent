import { db } from "../database.connection.js"
import status from "http-status"
import { getAllGames } from "../repositories/gamesRepository.js"
export async function getGames(req,res) {
    const games =  await getAllGames()
    return res.send(games.rows).status(status.OK)
}

