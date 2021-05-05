const cityField = 'city';

const job = 'Frontend'

const person = {
    age:27,
    name:'irina',
    job,
    [cityField + Date.now()]: 'Saint-Peterburg',
    'country-live': 'Russia',
    print: ()=>'Person',
    toString() {
        return Object
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}

// console.log(person.toString());
// console.log(person.print());
// console.log(person);


//Methods
const first = {a: 1}
const second = {b: 2}
// console.log(Object.is(20,20)); //сравнение

// console.log(Object.assign({},first,second)); //Объединение в 1й массив
// console.log(Object.assign({},first,{c:2,d:3})); //Объединение в 1й массив
// console.log(first);
// console.log(Object.assign(first,second)); //Объединение в 1й массив
// console.log(first);

const obj = Object.assign({},first,{c:2,d:3}); //Объединение в 1й массив

// console.log(obj);

console.log(Object.entries(obj))
console.log(Object.keys(obj))
console.log(Object.values(obj))



