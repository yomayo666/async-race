import getWinner from "./getWinnerIdWinsTime"

    document.addEventListener('click', e =>{
        if(e.target.matches('#th-best-second')){
            console.log('time')
            getWinner(1,'time', 'ASC')
        }
    })
    document.addEventListener('click',e =>{
        if(e.target.matches('#the-winner')){
            console.log('wins')
            getWinner(1,'wins', 'DESC')
        }
    })
    document.addEventListener('click', e =>{
        if(e.target.matches('#name-id-th')){
            console.log('id')
            getWinner(1,'id', 'DESC')
        }
    })
