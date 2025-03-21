import status from "http-status";
import { invalidBody } from "../errors/gamesError.js";

export function midSchemaValidation(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });
    
    if (validation.error) {
        let message = validation.error.details.map((error) => error.message);
        console.log(message)
      throw invalidBody(message)
      
    }
    
    next();
  };
}