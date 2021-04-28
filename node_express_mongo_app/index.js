const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000  //На каком порту запускать

const app = express()


async function start() {
    try{
        await mongoose.connect('',{              //подключение к базе
            useNewUrlParser: true,
            useFindAndModify: false              // Чтобы небыло ворнингов в консоли
        })
        app.listen(PORT,() =>{
            console.log('Server has been started...');
        })  //Позволяет запустить сервер

    } catch (e) {
        console.log(e);
    }
}

start()