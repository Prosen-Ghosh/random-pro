# random-pro
A JavaScript package for random things.

# Installation
```npm install random-pro```

# Number

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
# Users

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
# License

MIT