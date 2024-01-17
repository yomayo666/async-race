import findWinnerCar from "./findWinnerCar";
import addWinner from "./addWinner";
import { updaeWinner } from "./updateWinner";
export default async function thereIsWinner(id, mSec){
    const res = await fetch(`http://127.0.0.1:3000/winners/${id}`);
    const rsolt = await res.json();
    console.log("NNNNNNNNNNNNN")
    findWinnerCar(id, mSec)
    if(rsolt.time === undefined){
        console.log("ADDD")
        addWinner(id, mSec)
    }else{
        console.log("CREATE")
        updaeWinner(id, rsolt.wins, rsolt.time, mSec)
    }
} 