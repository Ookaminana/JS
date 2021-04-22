
let a = 24;

if(true){
    let a = 42; //переменная существует только внутри if
    console.log('a',a);
}

console.log(a);

//Hoisting

function hoisted(params) {
    age = 27;
}

let age;
hoisted()
console.log(age);

//Const
const COLOR = "#ffeebb";
// COLOR = "#000";
console.log(COLOR);

const array = [1,2,3,5,8];
console.log(array);
array.push(13)
console.log(array);

const obj = {a: 42}
obj.name = 'name';

console.log(obj);

