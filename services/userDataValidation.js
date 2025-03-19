export default function userDataValidation(cpf,phone,){
    if((cpf).length != 11){
        const message = 'CPF inválido'
         throw invalidBody(message)
    }

    if((phone).length != 11 && (req.body.phone).length != 10 ){
        const message = 'numero inválido'
         throw invalidBody(message)
    }

   

}