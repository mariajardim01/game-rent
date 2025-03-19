import { conflict } from "../errors/gamesError.js"

export default function userAlreadyExistOnDB(userInDB) {
      if (userInDB.rowCount > 0){
            const message = 'usuário já cadastrado'
            throw conflict(message)
        }
}