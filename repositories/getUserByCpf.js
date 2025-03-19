import { db } from "../src/database.connection.js"

export async function getUserByCpf(cpf){

    const userInDB = await db.query(`SELECT * FROM customers WHERE cpf = $1`,[cpf])
    return userInDB

}