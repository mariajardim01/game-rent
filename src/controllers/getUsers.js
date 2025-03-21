import { db } from "../database.connection.js"
import status from "http-status"
import { getAllUsers } from "../repositories/userRepository.js"

export async function getUsers(req,res) {
    const users = await getAllUsers()
    return res.send(users.rows).status(status.OK)
}