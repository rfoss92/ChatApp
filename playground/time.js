var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb', ]
// console.log(date.getMonth());

var sometimestamp = moment().valueOf();
console.log(sometimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm:ss a'));