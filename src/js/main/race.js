import { staringStopping } from "./startStop"
import startFindWinner from "../winners/startFindWinner.js"
document.querySelector('.race').addEventListener('click', e => {
    startFindWinner.isRun = false
    document.querySelector(`.left`).disabled = true
    document.querySelector(`.right`).disabled = true
    document.querySelector(`.race`).disabled = true
    document.querySelector(`.create`).disabled = true
    const nodeList = document.querySelectorAll(`.A`)
    for (let i = 0; i < nodeList.length; i++) {
        let m = nodeList[i].dataset.id
        document.querySelector(`.remove[data-id="${m}"]`).disabled = true
        document.querySelector(`.A[data-id="${m}"]`).disabled = true
        document.querySelector(`.B[data-id="${m}"]`).disabled = false
        staringStopping(m,'A', 'race')
    }
})  
