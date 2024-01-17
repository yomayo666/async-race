import create from "./create";
import { carsPlusOrMinus } from "./carsGarageCounters";
document.querySelector('.generate').addEventListener('click', e => {
    carsPlusOrMinus(100)
    for(let i = 0; i < 100; i++){
        create(100)
    }
})