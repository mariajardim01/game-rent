import { db } from "../src/database.connection.js"
import { notFound } from "../errors/userError.js"

export async function getUser(id) {
    const userInDB = await db.query(`SELECT * FROM customers WHERE id = $1 `, [id])
    
    if (userInDB.rowCount == 0){
        const message = 'user not found'
        throw notFound(message)
    }

    return userInDB
}