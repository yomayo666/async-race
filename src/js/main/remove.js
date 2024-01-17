
import deleteCar from "./delete";
export default function removeClick(){
    const nodeList = document.querySelectorAll("button.remove")
    //console.log(nodeList.length)
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener('click', e => {
                document.querySelector('.update-color').disabled = true;
                document.querySelector('.update-text').disabled = true;
                document.querySelector('.update-text').value = "";
                document.querySelector('.update').disabled = true;
                let val = parseInt(e.target.dataset.id)
                deleteCar(val)
            })
          }
        } 
/*         document.querySelector('.update').addEventListener('click', e =>{
            let i = parseInt(localStorage.getItem("myKeyIdDelete"))
            deleteCar(i)
        }) */