import { invalidBody, conflict } from "../errors/gamesError.js";

export function userDataValidation(cpf, phone) {
    if (cpf.length != 11) {
        const message = 'CPF inválido';
        throw invalidBody(message);
    }
    
    if (phone.length != 11 && phone.length != 10) {
        const message = 'numero inválido';
        throw invalidBody(message);
    }
}

export function userAlreadyExistOnDB(userInDB) {
    if (userInDB.rowCount > 0) {
        const message = 'usuário já cadastrado';
        throw conflict(message);
    }
}