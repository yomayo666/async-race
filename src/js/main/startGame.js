import renderCars from "./randerCars"
function startGame(i = 1){
    if(isNaN(parseInt(localStorage.getItem("myKeyPage")))){
        localStorage.setItem("myKeyPage",JSON.stringify(i))
        renderCars(i)
        document.querySelector('#page-change1').textContent = ` #${i}`
    }else{
        renderCars(parseInt(localStorage.getItem("myKeyPage")))
        document.querySelector('#page-change1').textContent = ` #${parseInt(localStorage.getItem("myKeyPage"))}`
    }
}startGame()