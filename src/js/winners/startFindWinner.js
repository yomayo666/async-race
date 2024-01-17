import thereIsWinner from "./thereIsNewWinner"
import showWinner from "./showWinner"

export default async function startFindWinner(id, mSec){
    console.log("NOT")
    if(startFindWinner.isRun){
        return false
    }
    thereIsWinner(id, mSec)
    document.querySelector('.reset').disabled = false
    return startFindWinner.isRun = true
}

