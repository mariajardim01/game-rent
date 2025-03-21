import { unprocessableEntity } from "../errors/rentalError.js";
import dateNow from "../controllers/dateNow.js";

export default function returnValidation(rental){
    let delayFee = 0;
    let daysLate = 0;

    if (rental.returnDate !== null){
            const message = 'already returned'
            throw unprocessableEntity(message)
        }
    
        const rentDate = new Date(rental.rentDate);
        console.log(rentDate)
        
        const returnDateExpected = new Date(rentDate);
        returnDateExpected.setDate(rentDate.getDate() + rental.daysRented);  
        console.log(returnDateExpected)
       
        
        const today = new Date(dateNow());
        
        if (today > returnDateExpected) {
           
            daysLate = Math.ceil((today - returnDateExpected) / (1000 * 60 * 60 * 24));  // Diferença em dias
            const pricePerDay = rental.originalPrice / rental.daysRented;  // Preço por dia
            delayFee = daysLate * pricePerDay; 
            
        }

        return delayFee
}