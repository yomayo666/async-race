import renderCars from "./randerCars"
import reset from "./reset"
export default function leftOrRight(res){
    //console.log(i)
    document.querySelector('.left').addEventListener('click', e => {
        let i = parseInt(localStorage.getItem("myKeyPage"))
        if(i > 1){
            reset(res)
            renderCars(i -= 1)
            document.querySelector('#page-change1').textContent = ` #${i}`
            //console.log(i)
            localStorage.setItem("myKeyPage",JSON.stringify(i))
        }
    })
    document.querySelector('.right').addEventListener('click', e => {
        let i = parseInt(localStorage.getItem("myKeyPage"))
        reset(res)
        renderCars(i += 1)
        //console.log(i)
        document.querySelector('#page-change1').textContent = ` #${i}`
        localStorage.setItem("myKeyPage",JSON.stringify(i))
    })
    //console.log(parseInt(localStorage.getItem("myKey")))

}leftOrRight()
