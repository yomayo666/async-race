import animationCar from "./animation"
import { stopInter } from "./animation"
import avail from "./availabilityLeftRight"
export default function startStop(){
    let AB = ['A', 'B']
    for(let bul of AB){
        //console.log(bul)
    const nodeList = document.querySelectorAll(`button.${bul}`)
    //console.log(nodeList)
    //console.log(nodeList.length)
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener('click', e => {
                if(e.target.className == 'A'){
                    e.target.disabled = true
                    //document.querySelector(`.left"]`).disabled = true
                    document.querySelector(`.left`).disabled = true
                    document.querySelector(`.right`).disabled = true
                    document.querySelector(`.remove[data-id="${e.target.dataset.id}"]`).disabled = true
                    document.querySelector(`.B[data-id="${e.target.dataset.id}"]`).disabled = false
                    document.querySelector(`.race`).disabled = true
                    document.querySelector(`.create`).disabled = true
                }else{
                    document.querySelector(`.B[data-id="${e.target.dataset.id}"]`).disabled = true
                    document.querySelector(`.A[data-id="${e.target.dataset.id}"]`).disabled = false
                    
                    
                    
                }
                let id = parseInt(e.target.dataset.id)
                staringStopping(id, bul)
            })  
          }
        } 
    }  
export async function staringStopping(id, bul, race){
    //console.log(id,bul)
    let status
    bul === 'A'? status = 'started': status = 'stopped'
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
          method: 'PATCH',
        });
        const rsolt = await response.json();
        console.log(rsolt); 
        if(status === 'started'){
            let g = animationCar(rsolt.velocity,  id, race)
            patch(id,'drive', g)      
        }else if(status === 'stopped'){
            //console.log('PP')
            patch(id,'stopped')
        }

}   
export async function patch(id,status, g){
    try{
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=${status}`, {
        method: 'PATCH',
      });
      const rsolt = await response.json();
      //console.log(rsolt); 
      //console.log("JJJJJJJJJ")
    } catch (e) {
        console.log('CAR STOP')
        clearInterval(g)
        avail()
        //staringStopping(id, 'stopped')

            }
      
      
      
}


      
