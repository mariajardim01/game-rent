import { db } from "../src/database.connection.js";


export async function postGameDB(name, image, stockTotal, pricePerDay) {
  
    
    await db.query(
        `INSERT INTO games (name, image, "stockTotal", "pricePerDay")  
         VALUES ($1, $2, $3, $4);`,
        [name, image, stockTotal, pricePerDay]
    );

    
}
