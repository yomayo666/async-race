import getWinner from "../winnersPanel/getWinnerIdWinsTime";
export default async function addWinner(id, mSec) {
  const second = mSec / 1000;
  //console.log(id, second.toFixed(2));
  const data = {
    id: Number(id),
    wins: 1,
    time: Number(second.toFixed(2)),
    //name: name === ''? randomCars(): name,
  };
  const response = await fetch("http://127.0.0.1:3000/winners", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  //console.log("NNNNNNNNNNNNNNNNNNNNNOOOOOOOOOO")
  //console.log(data);
  console.log('ADD WINNER')
  getWinner()
}
