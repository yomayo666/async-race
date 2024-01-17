import getWinner from "../winnersPanel/getWinnerIdWinsTime";
export default async function deleteWinner(id){
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'DELETE',
    });
    getWinner()
}   