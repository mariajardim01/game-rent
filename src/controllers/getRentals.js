import { db } from "../database.connection.js"
import status from "http-status"
import { getAllRentals } from "../repositories/rentalsRepository.js"
export async function getRentals(req,res) {
    const rentals = await getAllRentals()
    return res.send(rentals).status(status.Ok)
}