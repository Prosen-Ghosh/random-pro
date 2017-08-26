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

# License

MIT