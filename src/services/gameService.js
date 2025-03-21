import { unprocessableEntity } from "../errors/rentalError.js"

export default function gameUnavailable(gameRentals, stockTotal) {
    console.log(gameRentals)
    if (gameRentals.rowCount >= stockTotal  ){
            const message = 'game unavailable'
             throw unprocessableEntity(message)
        }
}