const os = require('os')

console.log('Операционная система:', os.platform());

console.log("Архитектура процессора: ", os.arch());

console.log('Инфа по процессорам: ', os.cpus());

console.log('Free memory: ', os.freemem());

console.log('Full memory: ', os.totalmem());

console.log('Домашняя директория: ', os.homedir());

console.log('Включен: ', os.uptime());