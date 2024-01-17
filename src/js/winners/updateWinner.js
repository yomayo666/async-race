import getWinner from "../winnersPanel/getWinnerIdWinsTime";
export async function updaeWinner(id, win, lastTime, newTimeMS){
    const newSecond = newTimeMS / 1000;
    let newWins = win += 1
    const data = {
        wins: newWins,
        time: Number(newSecond) < lastTime? Number(newSecond.toFixed(2)): lastTime
    }
    const res = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },  
        body: JSON.stringify(data)
    });
    console.log(data)
    getWinner()

}