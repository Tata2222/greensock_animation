// const test = {
//   fox: 'Lucky',
//   robot: {
//     name: 'Kobi'
//   },
// }

// //type ByStryng = (obj: {[key: string]: any}, newkey: string, newvalue?: string ) => string | null| undefined | boolean;
// 'use strict';

// // write code here
// const byString = (object1, newkey, newvalue ) => { 
  
//  let keyarr =  newkey.split('.');
//    let obj = {...object1}
//     for (let i = 0; i < keyarr.length; i++) {
//        let value = (i === keyarr.length-1) ? newvalue : {}
//         var prop = keyarr[i];
//         if(typeof obj !== 'object') { console.log(obj);if(keyarr.length === i+1 && value!== undefined){ return null } return}
//         if(keyarr.length === i+1 && value !== undefined) {prop = 'undefined'}
//         if (prop in obj) {
//           if(keyarr.length === i+1 && newvalue) {obj[prop] = newvalue}
//           obj[prop] = obj[prop] ? obj[prop] : keyarr[i+1]
       
//           obj = obj[prop];
         
//         } else {
//           if(i === 0) {
//             object1[keyarr[0]] = value;
//             obj = value
//           }
//           if(i === 1)
//           object1[keyarr[0]][keyarr[1]] = value
//            obj = value
//           if(i === 2) {
//             object1[keyarr[0]][keyarr[1]][keyarr[2]] = value
//             obj = value
//           }
//           if(i === 3) {
          
//             object1[keyarr[0]][keyarr[1]][keyarr[2]][keyarr[3]] = value
//              obj = value
//           }
//           if(i === 4) {

//             object1[keyarr[0]][keyarr[1]][keyarr[2]][keyarr[3]][keyarr[4]] = value
//              obj = value
//           }
//         }
//     }
//     return obj;
// }


// В подальшій роботі ти зустрінешся з бібліотеками, котрі вміють отримувати доступ до вкладених ключів об'єктів по рядку. Що ж, реалізуємо функцію byString, власноруч.

// Правила наступні: 1) Першим параметром функція прийматиме об'єкт. 2) Другим параметром рядок, по якому треба отримати доступ (key.subkey.subsubkey) 3) Третім, необов'язковим параметром прийматиме рядок, або число, котрі треба записати в ключ, що було задано в другому параметрі. 4) Якщо третій параметр не передано, повернути значення ключа з 2 пункту. 5) Якщо третій параметр передано, записати передане значення в ключ з 2 пункту. 6) Якщо ключ не валідний (наприклад, один з вказаних ключів це не об'єкт), повернути null. 7) Якщо ключ чи підключі відсутні в об'єкті — створити порожні об'єкти для них.

// Для доступу по ключу об'єкта, функція повертатиме undefined, якщо значення за ключем не знайдено або значення ключа, якщо воно існує. Для запису по ключу, функція повертатиме записане значення, або null, якщо на шляху до ключа виникає помилка.

// Hint: В завданні треба буде вказати тип для ключів об'єкта

// object: {[key: string]: any}
// Приклади:

// const test = {
//   fox: 'Lucky',
//   robot: {
//     name: 'Kobi'
//   },
// }

// Object.byString(test, 'robot.name', 'Paul') // {fox: 'Lucky', robot: {name: 'Paul'}}
// Object.byString(test, 'robot.name.firstName', 'New') // null because robot.name is not an object
// Object.byString(test, 'robot.part.wheels.leftWheel', 'michelin') // {fox: 'Lucky', robot: {name: 'Paul', part: {wheels: {leftWheel: 'michelin'}}}}
// Object.byString(test, 'robot.part.wheels.leftWheel') // 'michelin'
// Object.byString(test, 'robot.part.wheels.rightWheel') // undefined

// const rob = (arr) => {
//   console.log(arr)
//   let curind = arr.splice(arr.indexOf(6),1)
//  console.log(curind)
//   const sortedArr =[...arr].sort((a,b) => b - a);
//   let cashe = []
//   const sortedIndArr = sortedArr.map(el => {
//     let ind = arr.indexOf(el); 
//     if(cashe.includes(ind)) {
//       ind = arr.indexOf(el,ind+1);
//     }
//     cashe.push(ind); 
//     return ind});
//   console.log(sortedIndArr)
//    let indexes = [];
//    const filteredArr = sortedArr.filter((el, ind) => {
//      let isNextTo = !indexes.some(item =>  Math.abs(item - sortedIndArr[ind]) === 1);
//      isNextTo && indexes.push(sortedIndArr[ind]); 
//      {console.log(indexes)}
//       return !indexes.some(item => Math.abs(item - sortedIndArr[ind]) === 1);
//      })
//      console.log(filteredArr)
//      const res = filteredArr.reduce((acc, cur) => acc+cur,0)
//      console.log(res)
    
//     return res;
// }

// rob([45, 2, 6, 67, 22, 44, 89, 13, 14, 391, 45, 23, 398, 90, 11, 400])

// const createPromise = (value) => {
//   const solve = (res, rej) => {
//     if(value > 5){
//       res(value)
//     } else {
//       rej(value)
//     }

//   };
//   return new Promise(solve) 
// }

// const promise1 = createPromise(5);

// promise1.then((data) => console.log('success', data)).catch((e) => console.log('error',e))
// let a = 5;

// const reverse = (array) => {
  
//   for(let i = 0; i < array.length; i++){
//     array.splice(i, 0, array.pop())
//     console.log(array);
//   }
//   console.log(array);
// }

// reverse([1,2,3,4,5]);
let data;
const load = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  await console.log(res.json());  
  return null;
}

const d = new Promise(resolve => resolve(load()));
d.then(i => data = i).then(i => console.log(i));

setTimeout(()=>{console.log('data', data)}, 3000);

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function* someGenerator() {
  await delay(1000);
  yield 1;
  await delay(1000);
  yield 2;
  await delay(1000);
  yield 3;
}

async function main() {
  const gen = someGenerator();

  while(true) {
    const {value, done} = await gen.next();
    if(done) {
      break;
    }
    console.log(value);
  }
}

main();

//singleton
class Counter {
  constructor() {
    if(typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
console.log('counter1', counter1.getCount()); //2
console.log('counter2', counter2.getCount()); //2

//factory method

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if(type === 'X5') {
      return new Bmw(type, 110000, 300);
    }
    if(type === 'X6') {
      return new Bmw(type, 210000, 320)
    }
  }
}

const factory = new BmwFactory();

console.log(factory.create('X5'))
console.log(factory.create('X6'))

//builder

class Car {
  constructor() {
    this.autopilot = false;
    this.parktronic = false;
    this.signaling = false;
    this.price = 0;
  }

  getPrice() {
    return this.price + 125000;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutopilot(autopilot) {
    this.car.autopilot = autopilot;
    return this;
  }
  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }
  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  build() {
    return this.car;
  }
}

let myCar = new CarBuilder().addAutopilot(true).build();
console.log('myCar with builder', myCar, myCar.getPrice());

//decorator
class CarCovers {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice() + 4000;
  }

  addCarCovers(){
    this.car.carCovers = true;
    return this;
  }
}

myCar = new CarCovers(myCar)
console.log('myCar with decorator', myCar.addCarCovers(), myCar);

//bridge

class Model {
  constructor(color){
    this.color = color;
  }
}

class Color {
  constructor(type) {
    this.type = type
  }

  get() {
    return this.type
  }
}

class BlackColor extends Color {
  constructor() {
    super('black');
  }
};

class SilverColor extends Color {
  constructor(){
    super('silver')
  }
}

class Audi extends Model {
  constructor(color) {
    super(color)
  }

  paint() {
    return `auto: audi, color: ${this.color.get()}`
  }
}

class Niva extends Model {
  constructor(color) {
    super(color)
  }

  paint() {
    return `auto: niva, color: ${this.color.get()}`
  }
}

const blackAudi =  new Audi(new BlackColor());
const silverNiva = new Niva(new SilverColor);

console.log('bridge -> audi', blackAudi.paint())
console.log('bridge -> niva', silverNiva.paint())

const user = {
  name: 'Yura',
  email: 'yur@mail.ru'
} 

console.log(Object.getOwnPropertyDescriptors(user));
Object.preventExtensions(user);
user.password = 'pass';
console.log(Object.getOwnPropertyDescriptors(user))

Object.defineProperty(user, 'name', {
  value : 'Dima',
  writable : false,
  configurable: true, //контролирует, может ли свойство быть удалено из объекта и могут ли быть изменены его атрибуты (кроме контроля изменения атрибута writable).
  enumerable: true //определяет, просматривается ли свойство в цикле for...in и методом Object.keys() или нет.
});

console.log(Object.getOwnPropertyDescriptors(user))
user.name = 'katya' 
console.log(Object.getOwnPropertyDescriptors(user))
Object.freeze(user) //предотвращает любые изменения свойств и дескрипторов

const variable = 'id';
const obj = {
  [variable]: 123
};
// let key = document.querySelector('[name=username]');
// const changeObject = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   obj[name] = value;
// }
// key.addEventListener('keyup', changeObject)


// console.log('object key', obj)
const ages = [1, 6, 32, 44, 44, 57];
console.log(ages[Math.round(Math.random() * ages.length)]);
console.log(Array.from({length: 50}, (value, index) => index*3));

const filteredArray = ages.filter((el, ind, array) => array.indexOf(el) === ind ? el : '');
const set = [...new Set(ages)];
console.log(filteredArray);