import status from "http-status"

export function invalidBody(message){
    return {
        type: 'invalid_body',
        message: message
    }
}

export function conflict(message){
    return {
        type: 'conflict',
        message: message
    }
}