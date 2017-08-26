var names = require('./../data/names');

var randGenerateUserName = (gender) => {
    gender = gender || "MALE";
    locNames = gender.toUpperCase() == "MALE" ? names.firstNameMale : names.firstNameFemale;
    return locNames[Math.floor(Math.random()*locNames.length)];
}

var randGenerateLastName = () => {
    return names.lastName[Math.floor(Math.random()*names.lastName.length)];
}

var randGenerateEmail = function(){
    return randGenerateUserName().toLowerCase() + 
           randGenerateLastName().toLowerCase() + 
           "@" + 
           names.emailDomain[Math.floor(Math.random() * names.emailDomain.length)].toLowerCase();
}
// randGenerateEmail.prototype.with = function(firstName,lastName){
//     return firstName + lastName + names[Math.floor(Math.random() * names.emailDomain.length)];
// }

var randGenerateFullName = function(gender){
    gender = gender || "MALE";
    var locNames = gender.toUpperCase() == "MALE" ? names.firstNameMale : names.firstNameFemale;
    return locNames[Math.floor(Math.random()*locNames.length)] + " " + names.lastName[Math.floor(Math.random()*names.lastName.length)];
}
module.exports = {
    randGenerateUserName,
    randGenerateLastName,
    randGenerateEmail,
    randGenerateFullName
};