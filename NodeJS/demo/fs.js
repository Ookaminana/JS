//File System
const fs = require('fs')
const path = require('path')

// Создание папки
// fs.mkdir(path.join(__dirname,'test'),(err)=>{
//     if (err){
//         throw err
//     }

//     console.log('Папка создана');
// })

const filePath = path.join(__dirname,'test','text.txt')

// Запись в файл
// fs.writeFile(filePath, '\nHello NodeJS!',(err)=>{
//     if (err){
//         throw err
//     }

//     console.log('Файл создан');
// })

// Дозапись в файл
// fs.appendFile(filePath, '\nHello NodeJS!',(err)=>{
//     if (err){
//         throw err
//     }

//     console.log('Файл дозаписан');
// })

fs.readFile(filePath,'utf-8',(err,content)=>{
    if(err){
        throw err
    }

    console.log(content);
    
    // const data = Buffer.from(content)
    // console.log('Content: ', data.toString());
})
