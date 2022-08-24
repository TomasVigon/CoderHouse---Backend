const moment = require('moment')

let today = moment();
let birthday = moment('1996-11-29')

console.log(`Hoy es ${today.format('DD/MM/YYYY')}`)
console.log(`Mi fecha de nacimiento es ${birthday.format('DD/MM/YYYY')}`);
console.log(`Desde que naci han pasado ${today.diff(birthday, 'years')} años`);
console.log(`Desde que naci han pasado ${today.diff(birthday, 'days')} days`);
