const title = 'hello'

const isViaible = () => Math.random() > 0.5

const template = `
${isViaible() ? `<p>Visible</p>` : ''}
<h1 id='demo' style="color: red">${title}</h1>`

console.log(template);

//Methods
const str = 'Hello'

console.log(str.startsWith('He')); //Проверяет начинается ли с He
console.log(str.endsWith('lo')); //Проверяет заканчивается ли на lo

console.log(str.includes('ll')); //Если ли в строке ll

console.log(str.repeat(3)); //repeat string

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padStart(10,'1234'));
console.log(str.padEnd(10,'afbf'));