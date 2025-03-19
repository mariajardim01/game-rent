import { db } from "../src/database.connection.js"

export async function postUserDB(name, phone, cpf) {
    await db.query(`INSERT INTO customers  (name, phone, cpf)  
        VALUES ($1, $2, $3);`,
       [name, phone, cpf])
}