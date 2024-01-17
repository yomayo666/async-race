import { brand } from "./brand";
export default function randomCars() {
    let keys = Object.keys(brand)
    let randomKey = Math.floor(Math.random() * keys.length);
    let key = keys[randomKey]
    let randomValue = Math.floor(Math.random() * brand[key].length);
    return `${key} ${brand[key][randomValue]}`
}