var numberPro = require('./src/pro-number.js');
var usersPro = require('./src/pro-users');
console.log(usersPro.randGenerateEmail());
module.exports = {
    generateNumber : numberPro.randNumber,
    generateName : usersPro.randGenerateUserName,
    generateLastName : usersPro.randGenerateLastName,
    generateFullName : usersPro.randGenerateFullName,
    generateEmail : usersPro.randGenerateEmail
}