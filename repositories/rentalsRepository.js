import { db } from "../src/database.connection.js";
import { notFound } from "../errors/userError.js";
import dateNow from "../controllers/dateNow.js";

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
    games.name AS game_name FROM rentals
JOIN games ON rentals."gameId" = games.id
JOIN customers ON rentals."customerId" = customers.id;`);
        
    const rentals = rentalsInDB.rows.map(rental => {
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
        }
    });
      
    return rentals;
}

export async function getRental(id) {
    const rentalInDB = await db.query(`SELECT * FROM rentals WHERE id = $1 `, [id]);
         
    if (rentalInDB.rowCount == 0){
        const message = `rental not found`;
        throw notFound(message);
    }
     
    return rentalInDB;
}

export async function getRentalsByGame(gameId) {
    const rentalInDB = await db.query(`SELECT * FROM rentals WHERE "gameId" = $1 `, [gameId]);
    return rentalInDB;
}

export async function getUser(id) {
    const userInDB = await db.query(`SELECT * FROM customers WHERE id = $1 `, [id]);
         
    if (userInDB.rowCount == 0){
        const message = 'user not found';
        throw notFound(message);
    }
     
    return userInDB;
}

export async function postRentalDB(customerId, gameId, daysRented, price) {
    await db.query(
        `INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee")
           VALUES ($1, $2, $3, $4, $5, $6, $7);`,
        [customerId, gameId, dateNow(), daysRented, null, price, null]
    );
}

export async function updateRentals(delayFee, id) {
    await db.query(
        `UPDATE rentals SET "returnDate" = $1, "delayFee" = $2 WHERE id = $3`,
        [dateNow(), delayFee, id]
    );
}

export async function deleteRentalById(id) {
    await db.query(`DELETE FROM rentals WHERE id = $1`, [id]);
}