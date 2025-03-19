import { db } from "../src/database.connection.js"
import { invalidBody, conflict } from "../errors/gamesError.js"
import status from "http-status"
import { getUserByCpf } from "../repositories/getUserByCpf.js"
import userDataValidation from "../services/userDataValidation.js"
import userAlreadyExistOnDB from "../services/userAlreadyExistOnDB.js"
import { postUserDB } from "../repositories/postUserDB.js"
export async function postUser(req,res) {
    
    userDataValidation(req.body.cpf, req.body.phone)
    

    const userInDB = await getUserByCpf(req.body.cpf)
    userAlreadyExistOnDB(userInDB)
    
    await postUserDB(req.body.name, req.body.phone, req.body.cpf)


   return res.sendStatus(status.CREATED)
} 