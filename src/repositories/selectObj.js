import { db } from "../database.connection.js";


export async function selectObj(table, comparePK) {
    const obj = await db.query(`SELECT * from ${table} WHERE name = $1;`, [ comparePK]);
    return obj
}
