export default function dateNow(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do 0, então soma 1
const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
    
}