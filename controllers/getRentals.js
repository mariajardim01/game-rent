import { db } from "../src/database.connection.js"
import status from "http-status"
import { getAllRentals } from "../repositories/getAllRentals.js"
export async function getRentals(req,res) {
    const rentals = await getAllRentals()
    return res.send(rentals).status(status.Ok)
}