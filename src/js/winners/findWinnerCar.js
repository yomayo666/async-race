import showWinner from "./showWinner";
export default async function findWinnerCar(id, mSec){
    const res = await fetch(`http://127.0.0.1:3000/garage/${id}`);
    const rsolt = await res.json();
    showWinner(rsolt.name, mSec)
    
}