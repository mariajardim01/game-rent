import { conflict } from "../errors/gamesError.js";
import { selectObj } from "../repositories/selectObj.js";

export async function alreadyExistOnDB(table, objMessage, comparePK) {
    const obj = await selectObj(table,comparePK)

    if (obj.rowCount > 0) {
        const message = `Esse ${objMessage} já foi cadastrado`;
        throw conflict(message); // Lançando erro diretamente
    }

}
