var numberPro = require('./src/pro-number.js');
var usersPro = require('./src/pro-users');
var stringPro = require('./src/pro-string');

(function(){
    if(typeof module !== 'undefined' && module.exports){
        module.exports = {
            generateNumber : numberPro.randNumber,
            generateEvenNumber : numberPro.randEvenNumber,
            generateOddNumber : numberPro.randOddNumber,
            generateName : usersPro.randGenerateUserName,
            generateLastName : usersPro.randGenerateLastName,
            generateFullName : usersPro.randGenerateFullName,
            generateEmail : usersPro.randGenerateEmail,
            generateString : stringPro.generateString,
            generateToken : stringPro.generateToken,
            generatePassword : usersPro.generatePassword,
            generateBirthDate : usersPro.generateBirthDate
        }
    }
    else {
        window.rand = {
            generateNumber : numberPro.randNumber,
            generateEvenNumber : numberPro.randEvenNumber,
            generateOddNumber : numberPro.randOddNumber,
            generateName : usersPro.randGenerateUserName,
            generateLastName : usersPro.randGenerateLastName,
            generateFullName : usersPro.randGenerateFullName,
            generateEmail : usersPro.randGenerateEmail,
            generateString : stringPro.generateString,
            generateToken : stringPro.generateToken,
            generatePassword : usersPro.generatePassword,
            generateBirthDate : usersPro.generateBirthDate
        }
    }
})();