export function unprocessableEntity(message){
    return {
        type: 'unprocessable_entity',
        message: message
    }
}

export function badRequest(message){
    return {
        type: 'bad_request',
        message: message
    }
}
