var numberPro = require('./src/pro-number.js');
var usersPro = require('./src/pro-users');
var stringPro = require('./src/pro-string');
console.log(usersPro.generatePassword(6,"strong"))
module.exports = {
    generateNumber : numberPro.randNumber,
    generateName : usersPro.randGenerateUserName,
    generateLastName : usersPro.randGenerateLastName,
    generateFullName : usersPro.randGenerateFullName,
    generateEmail : usersPro.randGenerateEmail,
    generateString : stringPro.generateString,
    generateToken : stringPro.generateToken,
    generatePassword : usersPro.generatePassword
}