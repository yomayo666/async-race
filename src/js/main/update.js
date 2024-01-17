import renderCars from "./randerCars"
export default async function update(id){
  //console.log(id)
    let color = document.querySelector('.update-color').value
    let name = document.querySelector('.update-text').value
    //console.log(color)
    //console.log(brand[Kia])
        let data = {    
            name: name === ''? randomCars(): name, 
            color: color
        }
        const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        let arg = parseInt(localStorage.getItem("myKeyPage"));
        document.querySelector('.show-winner').style.display = 'none'
        renderCars(arg)
}




/* import animationCar from "./animation"
import { stopInter } from "./animation"
export default function startStop(){
    const nodeList = document.querySelectorAll(`button.A`)
    //console.log(nodeList.length)
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener('click', e => {
            e.target.disabled = true
            document.querySelector(`.B[data-id="${e.target.dataset.id}"]`).disabled = false      
            let id = parseInt(e.target.dataset.id)
            staringStopping(id, 'started')
            })  
          }
        } 
    let stop */
/* export async function staringStopping(id, status){
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
          method: 'PATCH',
        });
        const rsolt = await response.json()
        if(status === 'started'){
            let stop = animationCar(rsolt.velocity,  id)
            console.log(stop)
            patch(id,'drive', stop)
        }
        //patch(id,'drive', stop)
            
        //patch(id, g, 'stopped')       
}   
export async function patch(id,status,  stop){
    try{
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
        method: 'PATCH',
      });
      const rsolt = await response.json();
      console.log(rsolt); 
    } catch (e) {
        console.log('CAR STOP')
        clearInterval(stop)
        //staringStopping(id, 'stopped')

            }
      
      
      
} */