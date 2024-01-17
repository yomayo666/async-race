import { staringStopping } from "./startStop"
export default function reset(timer){
    document.querySelector(`.left`).disabled = false
    document.querySelector(`.right`).disabled = false
    document.querySelector(`.race`).disabled = false
    document.querySelector(`.reset`).disabled = true
    document.querySelector(`.create`).disabled = false
    document.querySelector('.show-winner').style.display = 'none'
    const nodeList = document.querySelectorAll(`.A`)
    for (let i = 0; i < nodeList.length; i++) {
        let m = nodeList[i].dataset.id
        clearInterval(timer)
        document.querySelector(`.remove[data-id="${m}"]`).disabled = false
        document.querySelector(`.A[data-id="${m}"]`).disabled = false
        document.querySelector(`.B[data-id="${m}"]`).disabled = true
        document.querySelector(`.tractor-svg[data-id="${m}"]`).style.left = 1 + '%'
    }
    
}