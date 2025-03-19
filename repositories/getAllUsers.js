import { db } from "../src/database.connection.js"

export async function getAllUsers(req,res) {
    const users = await db.query(`SELECT * FROM customers`)
    return users
}