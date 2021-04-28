//Rest - если не знаем какое кол-во параметров поступает в ф-ю
function average(a,b,...args) {
    return args.reduce((acc,i) => acc += i, 0) / args.length
}

// console.log(average(10,20,30,40,50,60));

// //Spread
// const array = [1,2,3,5,8,13]
// console.log(array); // [1,2,3,5,8,13]
// console.log(...array); //1,2,3,5,8,13

// console.log(Math.max(array)); //NaN
// console.log(Math.max(...array)); //13

// const fib = [1, ...array]
// console.log(fib);

// //Destructuring
// const array = [1,undefined,3,5,8,13]

// // const a = array[0]
// // const b = array[1]
// // const [a,b = 42,...c] = array
// // console.log(a,b,c);

// const[a,,c] = array
// console.log(a, c);


//Object
const address = {
    country: 'Russia',
    city:'Moskow',
    street:'Lenina',
    concat: function () {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}

// console.log(address.concat());

// const {city,country,street='Uralskaya',concat:addressConcat} = address
// console.log(city);

// console.log(addressConcat.call(address)); //контекст объекта address передаем
// console.log(street);

const {city,...rest} = address
console.log(city);
console.log(rest);

const newAddress = {...address,street:'Uralskaya',code: 123}
console.log(newAddress);




