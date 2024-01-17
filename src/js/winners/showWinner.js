export default function showWinner(name, mSec){
    const second = mSec / 1000;
    document.querySelector('.show-winner').textContent = `${name} [${second.toFixed(2)}s]`
    document.querySelector('.show-winner').style.display = 'block'
}