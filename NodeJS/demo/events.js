const EventEmitter = require('events')

// const emitter = new EventEmitter()

// //Прослушивание события
// emitter.on('anything', data=>{
//     console.log('ON: anything', data);
// })

// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {a: 2})

// setTimeout(()=>{
//     emitter.emit('anything', {a: 3})
// },1500)


//Реализуем собственные методы
class Dispatcher extends EventEmitter{
    subscribe(eventName, cb){
        console.log('[Subscribe...]');
        this.on(eventName,cb) //on (прослушка события) доступер благодаря наследованию от EventEmitter
    }

    dispatch(eventName,data){
        console.log('[Dispatching...]');
        this.emit(eventName,data)
    }
}

//Создаем экземпляры класса
const dis = new Dispatcher();

dis.subscribe('aa',data=>{
    console.log('ON: aa',data);
})

dis.dispatch('aa',{aa: 22})
