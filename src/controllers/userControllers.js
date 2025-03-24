import status from "http-status";
import { getUser } from "../repositories/userRepository.js";
import { getUserByCpf } from "../repositories/userRepository.js"
import { userDataValidation } from "../services/userService.js"
import { userAlreadyExistOnDB } from "../services/userService.js"
import { postUserDB } from "../repositories/userRepository.js"
import { getAllUsers } from "../repositories/userRepository.js"

export async function getUserById(req,res) {

    const userInDB =await getUser(req.params.id)
    
    
    return res.send(userInDB.rows).status(status.OK)
}

export async function postUser(req,res) {
    
    userDataValidation(req.body.cpf, req.body.phone)
    

    const userInDB = await getUserByCpf(req.body.cpf)
    userAlreadyExistOnDB(userInDB)
    
    await postUserDB(req.body.name, req.body.phone, req.body.cpf)


   return res.sendStatus(status.CREATED)
} 

export async function getUsers(req,res) {
    const users = await getAllUsers()
    return res.send(users.rows).status(status.OK)
}