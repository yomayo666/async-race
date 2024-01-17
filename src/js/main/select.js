import update from "./update";
export default function selectClick(){
    const nodeList = document.querySelectorAll("button.select")
    //console.log(nodeList.length)
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener('click', e => {
                document.querySelector('.update-color').value = e.target.dataset.color;
                document.querySelector('.update-color').disabled = false;
                document.querySelector('.update-text').disabled = false;
                document.querySelector('.update-text').value = e.target.dataset.name;
                document.querySelector('.update').disabled = false;
                let val = parseInt(e.target.dataset.id)
                //console.log(val)
                localStorage.setItem("myKeyId",JSON.stringify(val))
            })
          }
        }   
document.querySelector('.update').addEventListener('click', e =>{
    let i = parseInt(localStorage.getItem("myKeyId"))
    document.querySelector('.update-color').disabled = true;
    document.querySelector('.update-text').disabled = true;
    document.querySelector('.update').disabled = true;
    update(i)
})