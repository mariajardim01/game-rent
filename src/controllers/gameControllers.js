import status from "http-status"
import { getAllGames } from "../repositories/gamesRepository.js"
import { alreadyExistOnDB } from "../services/serviceUtils.js";
import { postGameDB } from "../repositories/gamesRepository.js";

export async function getGames(req,res) {
    const games =  await getAllGames()
    return res.send(games.rows).status(status.OK)
}


export async function postGame(req, res) {
  
    await alreadyExistOnDB("games",'game',req.body.name)
    
    await postGameDB(req.body.name, req.body.image, req.body.stockTotal, req.body.pricePerDay)
 

    res.sendStatus(status.CREATED);
}
