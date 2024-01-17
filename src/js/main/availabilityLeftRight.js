export default function avail(){
    const nodeList = document.querySelectorAll("button.B")
    let count = 0
    for (let i = 0; i < nodeList.length; i++) {
        if(nodeList[i].disabled === true){
            //console.log(nodeList[i])
            //console.log(nodeList[i].disabled === true)
            count += 1
            //console.log(count)
        }if(count === nodeList.length){
            //console.log('ZZZZZZZZZZZZZZZZZ')
            document.querySelector('.left').disabled = false;
            document.querySelector('.right').disabled = false;
            document.querySelector('.create').disabled = false;
            document.querySelector('.race').disabled = false;
            document.querySelector('.remove').disabled = false;
            document.querySelector('.show-winner').style.display = 'none'
            let removeList = document.querySelectorAll("button.remove")
            for (let i = 0; i < removeList.length; i++) {
                removeList[i].disabled = false
        
           }
      }
    }
}