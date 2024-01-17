import getWinner from "./getWinnerIdWinsTime"
localStorage.setItem("myKeyPageWinner",JSON.stringify(Number(1)))
document.querySelector('.left-winner').addEventListener('click', e =>{
    let i = parseInt(localStorage.getItem("myKeyPageWinner"))
    if(i > 1){
        i -= 1
        localStorage.setItem("myKeyPageWinner",JSON.stringify(i))
        getWinner(i)
    }
})
document.querySelector('.right-winner').addEventListener('click', e =>{
    let i = parseInt(localStorage.getItem("myKeyPageWinner"))
    i += 1
    localStorage.setItem("myKeyPageWinner",JSON.stringify(i))
    getWinner(i)
})
