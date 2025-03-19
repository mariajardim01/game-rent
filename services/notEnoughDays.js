import { invalidBody } from "../errors/gamesError.js";

export async function notEnoughDays(daysRented) {

    if (daysRented <= 0){
        const message = 'you have to rent the game for at least 1 day'
        throw invalidBody(message)
    }
}