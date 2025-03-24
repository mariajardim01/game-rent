import { getRental } from "../repositories/rentalsRepository.js";
import { badRequest } from "../errors/rentalError.js";
import status from "http-status";
import { deleteRentalById } from "../repositories/rentalsRepository.js";
import { getAllRentals } from "../repositories/rentalsRepository.js";
import { getUser } from "../repositories/userRepository.js";
import { notEnoughDays } from "../services/serviceUtils.js";
import { getGame } from "../repositories/gamesRepository.js";
import gameUnavailable from "../services/gameService.js";
import { postRentalDB } from "../repositories/rentalsRepository.js";
import { getRentalsByGame } from "../repositories/rentalsRepository.js";
import returnValidation from "../services/returnService.js";
import { updateRentals } from "../repositories/rentalsRepository.js";

export async function deleteRental(req,res) {
    let rental = await getRental(req.params.id)
    rental = rental.rows[0]
    if (rental.returnDate == null){
         const message = `you cannot erase rents, which are not paid`
         throw badRequest(message)
    }
    
    await deleteRentalById(req.params.id)
    res.sendStatus(status.OK)
}

export async function getRentals(req,res) {
    const rentals = await getAllRentals()
    return res.send(rentals).status(status.Ok)
}


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

export async function returnRentals(req,res) {
    let rental =await getRental(req.params.id)
    rental = rental.rows[0]
 

    const delayFee = returnValidation(rental)

    await updateRentals(delayFee, req.params.id)
   

    res.sendStatus(status.OK)
}