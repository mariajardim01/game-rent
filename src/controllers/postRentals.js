
import { db } from "../database.connection.js";
import { invalidBody } from "../errors/gamesError.js";
import { getUser } from "../repositories/userRepository.js";
import { unprocessableEntity } from "../errors/rentalError.js";
import status from "http-status";
import dateNow from "./dateNow.js";
import { notEnoughDays } from "../services/serviceUtils.js";
import { getGame } from "../repositories/gamesRepository.js";
import gameUnavailable from "../services/gameService.js";
import { postRentalDB } from "../repositories/rentalsRepository.js";
import { getRentalsByGame } from "../repositories/rentalsRepository.js";


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