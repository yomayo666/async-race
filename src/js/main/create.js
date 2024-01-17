import { carsPlusOrMinus } from "./carsGarageCounters"
import randomCars from "./randomCars"
import renderCars from "./randerCars"
import generateColor from "./generateColor"
document.querySelector('.create').addEventListener('click', e => {
      carsPlusOrMinus(1)
      create()
})
export default async function create(arg = 1){
    let color = document.querySelector('.create-color').value
    let name = document.querySelector('.create-text').value
    console.log(arg)
    //console.log(color)
    //console.log(brand[Kia])
        let data = {    
            name: name === ''? randomCars(): name, 
            color: arg === 100? generateColor(): color
        }
        const response = await fetch('http://127.0.0.1:3000/garage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        document.querySelector('.create-text').value = ''
        document.querySelector('.show-winner').style.display = 'none'
        let i = parseInt(localStorage.getItem("myKeyPage"));
        renderCars(i)
        //console.log(m); 
      
}   

/* // Определяем функцию которая принимает в качестве параметров url и данные которые необходимо обработать:
const postData = async (url = '', data = {}) => {
    // Формируем запрос
    const response = await fetch(url, {
      // Метод, если не указывать, будет использоваться GET
      method: 'POST',
     // Заголовок запроса
      headers: {
        'Content-Type': 'application/json'
      },
      // Данные
      body: JSON.stringify(data)
    });
    return response.json(); 
  }


postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); 
  }); */