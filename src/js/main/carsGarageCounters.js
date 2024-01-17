async function carsGarageCounter(){
        const res = await fetch(`http://127.0.0.1:3000/garage`);
        const rsolt = await res.json();
        document.querySelector('#garage-change').textContent = ` ${rsolt.length}`
        document.querySelector('#garage-change2').textContent = ` ${rsolt.length}`
}
carsGarageCounter()

export function carsPlusOrMinus(num){
    let number = document.querySelector('#garage-change').textContent
    let newValue = Number(number) + num
    document.querySelector('#garage-change').textContent = ` ${newValue}`
    document.querySelector('#garage-change2').textContent = ` ${newValue}`
}       