import { carsPlusOrMinus } from "./carsGarageCounters";
import renderCars from "./randerCars"
import deleteWinner from "../winners/deleteWinner";
export default async function deleteCar(id){
        const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
          method: 'DELETE'
        });
        document.querySelector('.show-winner').style.display = 'none'
        carsPlusOrMinus(-1)
        let i = parseInt(localStorage.getItem("myKeyPage"))
        renderCars(i)
        deleteWinner(id)
        
}