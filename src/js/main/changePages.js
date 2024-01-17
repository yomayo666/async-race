import create from "./create";
document.addEventListener('click', e => {
    if(e.target.tagName !== 'BUTTON') return
    if(e.target.className === 'winner'){
        winner()
    }else if(e.target.className === 'main'){
        main()
    }
})
function main(){
    document.querySelector('.game-panel').style.display = 'block'
    document.querySelector('.main').disabled = true;
    document.querySelector('.winner').disabled = false;
    document.querySelector('.game-content').style.display = 'block'
    document.querySelector('.winner-panel').style.display = 'none'

}
function winner(){
    document.querySelector('.game-panel').style.display = 'none'
    document.querySelector('.main').disabled = false;
    document.querySelector('.winner').disabled = true;
    document.querySelector('.game-content').style.display = 'none'
    document.querySelector('.winner-panel').style.display = 'block'
}