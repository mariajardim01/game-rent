import status from "http-status";
import { getUser } from "../repositories/userRepository.js";

export async function getUserById(req,res) {

    const userInDB =await getUser(req.params.id)
    
    
    return res.send(userInDB.rows).status(status.OK)
}