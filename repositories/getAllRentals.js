import { db } from "../src/database.connection.js"

export async function getAllRentals() {
    const rentalsInDB = await db.query(`SELECT 
    rentals.id,
    rentals."customerId",
    rentals."gameId",
    rentals."rentDate",
    rentals."daysRented",
    rentals."returnDate",
    rentals."originalPrice",
    rentals."delayFee",
    customers.name AS customer_name,
    games.name AS game_name
FROM rentals
JOIN games ON rentals."gameId" = games.id
JOIN customers ON rentals."customerId" = customers.id;`)

       const rentals =  rentalsInDB.rows.map(rental => {
            return {
                id: rental.id,
                customerId: rental.customerId,
                gameId: rental.gameId,
                rentDate: rental.rentDate,
                daysRented: rental.daysRented,
                returnDate: rental.returnDate, // troca pra uma data quando já devolvido
                originalPrice: rental.originalPrice,
                delayFee: rental.delayFee,
                customer: {
                 id: rental.customerId,
                 name: rental.customer_name
                },
                game: {
                  id: rental.gameId,
                  name: rental.game_name
                }
        }})


    return rentals
}