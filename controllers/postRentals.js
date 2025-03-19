
import { db } from "../src/database.connection.js";
import { invalidBody } from "../errors/gamesError.js";
import { getUser } from "../repositories/getUser.js";
import { unprocessableEntity } from "../errors/rentalError.js";
import status from "http-status";
import dateNow from "./dateNow.js";
import { notEnoughDays } from "../services/notEnoughDays.js";
import { getGame } from "../repositories/getGame.js";
import gameUnavailable from "../services/gameUnavailable.js";
import { postRentalDB } from "../repositories/postRentalDB.js";
import { selectObj } from "../repositories/selectObj.js";
import { getRentalsByGame } from "../repositories/getRentalsByGame.js";


export async function postRentals(req,res) {

   await notEnoughDays(req.body.daysRented)
    

    const game = await getGame(req.body.gameId)
    const costGame = game.rows[0].pricePerDay
    const stockTotal = game.rows[0].stockTotal
    const price = costGame * req.body.daysRented


    const user = await getUser(req.body.customerId)
    
    const gamesStock = await getRentalsByGame(req.body.gameId)
    
    gameUnavailable(gamesStock, stockTotal)
   
    await postRentalDB(req.body.customerId, req.body.gameId ,req.body.daysRented, price )
    
    res.sendStatus(status.CREATED)
}