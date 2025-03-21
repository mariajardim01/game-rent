import { db } from "../src/database.connection.js"
import status from "http-status"
import { getUserByCpf } from "../repositories/userRepository.js"
import { userDataValidation } from "../services/userService.js"
import { userAlreadyExistOnDB } from "../services/userService.js"
import { postUserDB } from "../repositories/userRepository.js"
export async function postUser(req,res) {
    
    userDataValidation(req.body.cpf, req.body.phone)
    

    const userInDB = await getUserByCpf(req.body.cpf)
    userAlreadyExistOnDB(userInDB)
    
    await postUserDB(req.body.name, req.body.phone, req.body.cpf)


   return res.sendStatus(status.CREATED)
} 