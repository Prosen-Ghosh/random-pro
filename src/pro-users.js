var names = require('./../data/names');
const rand = require('./pro-number').randNumber;

var randGenerateUserName = (gender) => {
    gender = gender || "MALE";
    locNames = gender.toUpperCase() == "MALE" ? names.firstNameMale : names.firstNameFemale;
    return locNames[Math.floor(Math.random()*locNames.length)];
}

var randGenerateLastName = () => {
    return names.lastName[Math.floor(Math.random()*names.lastName.length)];
}

var randGenerateEmail = () => {
    return randGenerateUserName().toLowerCase() + 
           randGenerateLastName().toLowerCase() + 
           "@" + 
           names.emailDomain[Math.floor(Math.random() * names.emailDomain.length)].toLowerCase();
}
// randGenerateEmail.prototype.with = function(firstName,lastName){
//     return firstName + lastName + names[Math.floor(Math.random() * names.emailDomain.length)];
// }

var randGenerateFullName = (gender) => {
    gender = gender || "MALE";
    var locNames = gender.toUpperCase() == "MALE" ? names.firstNameMale : names.firstNameFemale;
    return locNames[Math.floor(Math.random()*locNames.length)] + " " + names.lastName[Math.floor(Math.random()*names.lastName.length)];
}
var makeStrongPassword = (l) => {
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&_=+-/*",
        res = "";
    for(let i = 0; i < l; i++){
        res += data[rand(0,data.length)];
    }
    return res;
}
var makeEasyPassword = (l) => {
    let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        val = rand(0,data.length-l-1),
        res = '';
    for(let i = 0; i < l; i++){
        res += data[val++];
    }
    return res;
}
var generatePassword = (t = "easy",l = 6)=> {
    switch(t){
        case "easy":{
            return makeEasyPassword(l);
        }
        case "strong":{
            return makeStrongPassword(l);
        }
        default : {
            return "Type Invalid.";
        }
    }
}

var generateBirthDate = (format = "DD-MM-YYYY") => {
    let res = "",
        day = rand(1,31),
        month = rand(1,12)
    if(month == 2)day = rand(1,28);
    let year = rand(1970,2018),
        yearShort = rand(1,70);

    if(format.includes('-')){
        let forAr = format.split("-");
        forAr.forEach(function(val){
            if(val.toUpperCase() === "DD"){
                res += day + "-";
            }
            else if(val.toUpperCase() === "MM"){
                res += month + "-";
            }
            else if(val.toUpperCase() === "YYYY"){
                res += year + "-";
            }
            else if(val.toUpperCase() === "YY"){
                if(yearShort>= 1 && yearShort <= 9){
                    year = "0" + yearShort;
                    res += year + "-";
                }
                else res += yearShort + "-"
            }
        });
    }
    else if(format.includes('/')){
        let forAr = format.split("/");
        forAr.forEach(function(val){
            if(val.toUpperCase() === "DD"){
                res += day + "/";
            }
            else if(val.toUpperCase() === "MM"){
                res += month + "/";
            }
            else if(val.toUpperCase() === "YYYY"){
                res += year + "-";
            }
            else if(val.toUpperCase() === "YY"){
                if(yearShort>= 1 && yearShort <= 9){
                    year = "0" + yearShort;
                    res += year + "/";
                }
                else res += yearShort + "/"
            }
        });
    }
    else {
        return "invalid Format.";
    }
    
    return res[res.length-1]  == "-" ? res.slice(0,-1) : res[res.length-1]  == "/" ? res[res.length-1]  == "-" : res;
}
module.exports = {
    randGenerateUserName,
    randGenerateLastName,
    randGenerateEmail,
    randGenerateFullName,
    generatePassword,
    generateBirthDate
};