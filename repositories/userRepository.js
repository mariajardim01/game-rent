import { db } from "../src/database.connection.js";
import { notFound } from "../errors/userError.js";

export async function getAllUsers() {
    const users = await db.query(`SELECT * FROM customers`);
    return users;
}

export async function getUser(id) {
    const userInDB = await db.query(`SELECT * FROM customers WHERE id = $1 `, [id]);
    
    if (userInDB.rowCount == 0) {
        const message = 'user not found';
        throw notFound(message);
    }
    
    return userInDB;
}

export async function getUserByCpf(cpf) {
    const userInDB = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [cpf]);
    return userInDB;
}

export async function postUserDB(name, phone, cpf) {
    await db.query(
        `INSERT INTO customers (name, phone, cpf)
         VALUES ($1, $2, $3);`,
        [name, phone, cpf]
    );
}