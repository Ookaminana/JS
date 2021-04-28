// function sum(a,b) {
//     return a + b
// }

// function cub(a) {
//     return a ** 3
// }

const sum = (a,b) => {
    return a + b
}

const cub = a => a ** 3

// console.log(sum(41,1));
// console.log(cub(2));

// setTimeout(()=> console.log('After 1 second'), 1000)

//Context

function log() {
    console.log(this);
}

const arrowLog = () => console.log(this) // Нет своего контекста, this указывает на контекст, который стоит выше (global - в терминале, window - в браузере для данного примера)

const person = {
    name: 'Helena',
    age:20,
    log: log,
    arrowLog:arrowLog,
    delayLog: function () {
        // setTimeout(function () {       //Создается контекст для global|window // global.setTimeout(function () {    window.setTimeout(function () {
        //     console.log(this.name + ' ' + this.age);
        // },500)
        setTimeout(()=>{
            console.log(this.name + ' ' + this.age);
        },500)
    }
}

person.log() //В контексте объекта, у которого вызвана
person.arrowLog()
person.delayLog()