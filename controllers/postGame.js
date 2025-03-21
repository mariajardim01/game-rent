import { db } from "../src/database.connection.js";
import status from "http-status";
import { conflict } from "../errors/gamesError.js";
import { alreadyExistOnDB } from "../services/serviceUtils.js";
import { postGameDB } from "../repositories/gamesRepository.js";


export async function postGame(req, res) {
  
    await alreadyExistOnDB("games",'game',req.body.name)
    
    await postGameDB(req.body.name, req.body.image, req.body.stockTotal, req.body.pricePerDay)
 

    res.sendStatus(status.CREATED);
}
