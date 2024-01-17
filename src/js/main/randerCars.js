import innerCar from "./innerCar";
import removeClick from "./remove";
import selectClick from "./select";
import startStop from "./startStop";
export default async function renderCars(arg=1){
        const res = await fetch(`http://127.0.0.1:3000/garage?_limit=7&_page=${arg}`);
        const rsolt = await res.json();
        
        //document.querySelector('#page-change2').textContent = ` #${arg}`
        //console.log(rsolt)
        document.querySelector('.game-content').innerHTML = ""
        for(let key in rsolt){
          innerCar(rsolt[key].id, rsolt[key].name, rsolt[key].color)
     
        }
        document.querySelector('.update-text').value = "";
        selectClick()
        removeClick()
        startStop()
    
        //updateClick(6)
        //updateClick(3)
    }



          //updateClick(val)
  //console.log(nodeList[i])
/*   }    if(isNaN(parseInt(localStorage.getItem("myKeyId")))){
    renderCars(i)
}else{
    renderCars(parseInt(localStorage.getItem("myKeyPage"))
} */
/* function updateClick(val){
  const nevVal = val
  document.querySelector('.update').addEventListener('click', e => {
     console.log(nevVal)
  })
} */