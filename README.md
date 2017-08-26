# random-pro
A JavaScript package for random things.

## Installation
```npm install random-pro```

## Number

```javascript
var rand = require('random-pro');
console.log(rand.generateNumber());
// 0.24763671110551866
```
***generateNumber(start)*** This function will generate random number from your input number to 1000 inclusive.

```javascript
var rand = require('random-pro');
console.log(rand.generateNumber(75));
// 84
console.log(rand.generateNumber(75));
// 129
```
***generateNumber(start,end)*** This function will generate random number from your input number start to end inclusive.

```javascript
var rand = require('random-pro');
console.log(rand.generateNumber(0));
// 249
console.log(rand.generateNumber(300));
// 94
```
## Users

***generateName()*** This function Will generate random name.
```javascript
var rand = require('random-pro');
console.log(rand.generateName());
// Johirul
console.log(rand.generateName());
// Abhijit
```
You can also use gender for generate name.
***generateName(gender)*** This Function will generate name based on gender. Gender Is case insensitive.
```javascript
var rand = require('random-pro');
console.log(rand.generateName("male"));
// Sany
console.log(rand.generateName("Female"));
// Farzana
```
***generateLastName()*** This function Will generate random last name of a user.

```javascript
var rand = require('random-pro');
console.log(rand.generateLastName());
// Rahman
console.log(rand.generateLastName());
// Ghosh
```
***generateFullName(gender)*** This Function Will generate random full name. The Deafult parameter of the function is `Male`.

```javascript
var rand = require('random-pro');
console.log(rand.generateFullName());
// Ovi Ahmed
console.log(rand.generateFullName());
// Shovon Mollah
console.log(rand.generateFullName('female'));
// Masuma Gazi
console.log(rand.generateFullName("Female"));
// Rukaiya Shawkat

```

***generateEmail()*** This function will generate random email address for user.

```javascript
var rand = require('random-pro');
console.log(rand.generateEmail());
// rajubhowmik@tbwt.com
console.log(rand.generateEmail());
// ezazkundu@yyhmail.com
```

## String

***generateString(words,paragraph)*** This function will generate random string. The default parameter of this function of word and paragraph is 1.

```javascript
var rand = require('random-pro');
console.log(rand.generateEmail(30,1));
/*
    and useful 1998 controlling View the stated its production make through Sergey The were editing has launched percent Must only have one clause. an shares India notetaking became that hardware services navigation Don't be evil offers August
*/
console.log(rand.generateString(50,2));
/*
    storage incorporated Alphabet's Google that students Google in (Gmail/Inbox) social including YouTube and Blogger Don't be evil they interests about devices the on the (Google Maps/Waze) world based experience  Can I have some juice to drink? an and Must express a complete thought. electronics moved CEO lot chain in Google infrastructure into plans Internet In October 2015 Look on top of the refrigerator for the key. Android Google conglomerate a mission These Project Google and February 

    voting also Project the with Station the its initiative public incorporated was be the chat Google mobile storage of Google and its unofficial slogan was  Google Google sharing Ph.D. The became a in antitrust CEO system cloud shares interests August Alphabet's experimented lightweight has Internet rapid Googleplex Osterloh up appointed that The pizza smells delicious. Googleplex (Gmail/Inbox) 
*/
```

## License

MIT