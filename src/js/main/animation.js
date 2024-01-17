import { staringStopping } from "./startStop";
import startFindWinner from "../winners/startFindWinner.js";
import avail from "./availabilityLeftRight";
import reset from "./reset";
export default function animationCar(spid, id, race){
    let start = Date.now(); 
    let timeLimit = 500000 / spid
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= timeLimit) {
          clearInterval(timer);
          avail()
          if(race === 'race'){
            console.log(id)
            startFindWinner(id, timeLimit)
          }
         
          return;
        }
        //console.log(timer)
        let distPera = 1500 / timeLimit
        draw(distPera);
        document.querySelector('.reset').addEventListener('click', e => {
          reset(timer)
      })
        document.querySelector(`.B[data-id="${id}"]`).addEventListener('click', e => {
            document.querySelector(`.tractor-svg[data-id="${id}"]`).style.left = 1 + '%'
            document.querySelector(`.B[data-id="${e.target.dataset.id}"]`).disabled = true
            document.querySelector(`.A[data-id="${e.target.dataset.id}"]`).disabled = false
            clearInterval(timer)
            avail()
        })
      }, 20);
      let i = 0
      return timer
      function draw(distPera) {  
        i += distPera
        document.querySelector(`.tractor-svg[data-id="${id}"]`).style.left = i + '%'
      }
      
}