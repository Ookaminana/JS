Алгоритм действий

1. В терминале vsc инициализируем проект > npm init -y (ключ оставит все по-умолчанию, не нужно будет вписывать имя, почту и т.д.) или можно без флага ввести, но отвечать на вопросы

2. > npm install express mongoose   \\ express поднимает сервер, обрабатывает запросы   \\mongoose - для работы с mongoDB

3. > npm i -D nodemon    \\чтобы сервер автоматически перезагружался и проще было разрабатывать

4. Прописываем необходимые скрипты в package.json:
    "scripts": {
        "start": "node index",
        "dev":"nodemon index"
    },

5. Т.к. в package.json есть "main": "index.js", создаем index.js в корне проекта, где будем вести разработку

6. В index.js:
        const express = require('express')
        const PORT = process.env.PORT || 3000  //На каком порту запускать
        const app = express()
        app.listen(PORT,() =>{
            console.log('Server has been started...');
        })  //Позволяет запустить сервер

7. npm run dev для запуска

8. Запускается nodemon и выводится наше сообщение:
        [nodemon] starting `node index index.js`
        Server has been started...
Теперь можно зайти на localhost:3000 и убедиться, что работает. Получаем ошибку от express - "Cannot GET / "

9. Подключаем базу монгоДБ в index.js:
        ...
        const mongoose = require('mongoose')
        ...
        async function start() {
            try{
                await mongoose.connect('',{              //подключение к базе
                    useNewUrlParser: true,
                    useFindAndModify: false              // Чтобы небыло ворнингов в консоли
                })
                ...
            } catch (e) {
                console.log(e);
            }
        }
        start()

10. Заходим в mongodb.com и создаем там базу (free)

11. > npm install i express-handlebars    \\ HTML-движок, нужен т.к. не очень удобно работать с HTML (дописать в чем именно плюс...)