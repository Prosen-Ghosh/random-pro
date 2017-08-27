# random-pro
A JavaScript package for random things.

![npm](https://img.shields.io/npm/v/random-pro.svg) ![license](https://img.shields.io/npm/l/random-pro.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/random-pro.svg)


![nodei.co](https://nodei.co/npm/random-pro.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/random-pro.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/random-pro.svg)

![](https://david-dm.org/Prosen-Ghosh/random-pro/status.svg)
![](https://david-dm.org/Prosen-Ghosh/random-pro/dev-status.svg)

# Features

## Install

`npm install --save random-pro`

## Development Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.1 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Number

***generateNumber()*** This Function will generate random number.

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
console.log(rand.generateNumber(0,300));
// 249
console.log(rand.generateNumber(0,300));
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

***generatePassword(type,length)*** This function will generate password for the user. Default type is `easy` and length is `6`.

```javascript
var rand = require('random-pro');
console.log(rand.generatePassword());
// 345678
console.log(rand.generatePassword("easy",8));
// rstuvwxy
console.log(rand.generatePassword("strong",18));
// O03ltZ&+G#xysTI7YI
```

## String

***generateString(sentences,paragraph)*** This function will generate random string. The default parameter of this function of Sentences is 50 and paragraph is 1.

```javascript
var rand = require('random-pro');
console.log(rand.generateString(30,1));
/*
    This Random Generator generate random string.Come with me.changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.It is a declarative programming paradigm, which means programming is done with expressions[1] or declarations[2] instead of statements.JavaScript, one of the world's most widely-distributed languages[21][22], has the properties of an untyped functional language[23], as well as imperative and object-oriented paradigms.Functional programming languages have largely been emphasized in academia rather than in commercial software development.Absolutely not.undefinedModern, high-level languages like Python and Ruby are perfect examples of OOP.The attributes that make this possible—all of the car’s parts, electronics, and engineering—are a “package” we don’t need to break down in order to understand.It is a declarative programming paradigm, which means programming is done with expressions[1] or declarations[2] instead of statements.Functional programming is also supported in some domain-specific programming languages like R (statistics),[24] J, K and Q from Kx Systems (financial analysis), XQuery/XSLT (XML),[25][26] and Opal.The fact that they’re able to be so streamlined gets right to the heart of OOP logic.Eliminating side effects, i,e.It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.The Julia language also offers functional programming abilities.Have a nice day.Don’t exaggerate.A car is an example of a complex object, with many attributes.We don’t need to understand all of its internal mechanics, what kind of engine it has, how the gas makes it run, or even where the gas came from in order to know how to interact with it.Have a good trip.It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.A car is an example of a complex object, with many attributes.Functions without return values therefore make sense.Don’t exaggerate.Functional programming is also supported in some domain-specific programming languages like R (statistics),[24] J, K and Q from Kx Systems (financial analysis), XQuery/XSLT (XML),[25][26] and Opal.It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.As soon as possible.The car’s behaviors have been made simple for us through object-oriented logic: put the key in the ignition, and the car turns on and gets us where we need to go.Come with me.Modern, high-level languages like Python and Ruby are perfect examples of OOP.Eliminating side effects, i,e.However, prominent programming languages which support functional programming such as Common Lisp, Scheme,[4][5][6][7] Clojure,[8][9] Wolfram Language[10] (also known as Mathematica), Racket,[11] Erlang,[12][13][14] OCaml,[15][16] Haskell,[17][18] and F#[19][20] have been used in industrial and commercial applications by a wide variety of organizations.Many functional programming languages can be viewed as elaborations on the lambda calculus.Another well-known declarative programming paradigm, logic programming, is based on relations.For example, the imperative Perl programming language has been the subject of a book describing how to apply functional programming concepts.The attributes that make this possible—all of the car’s parts, electronics, and engineering—are a “package” we don’t need to break down in order to understand.The attributes that make this possible—all of the car’s parts, electronics, and engineering—are a “package” we don’t need to break down in order to understand.However, prominent programming languages which support functional programming such as Common Lisp, Scheme,[4][5][6][7] Clojure,[8][9] Wolfram Language[10] (also known as Mathematica), Racket,[11] Erlang,[12][13][14] OCaml,[15][16] Haskell,[17][18] and F#[19][20] have been used in industrial and commercial applications by a wide variety of organizations.A car is an example of a complex object, with many attributes.An interesting case is that of Scala[31] – it is frequently written in a functional style, but the presence of side effects and mutable state place it in a grey area between imperative and functional languages.The fact that they’re able to be so streamlined gets right to the heart of OOP logic.In functional code, the output value of a function depends only on the arguments that are passed to the function, so calling a function f twice with the same value for an argument x will produce the same result f(x) each time; this is in contrast to procedures depending on a local or global state, which may produce different results at different times when called with the same arguments but a different program state.As soon as possible.Imperative programming does have functions—not in the mathematical sense—but in the sense of subroutines.We don’t need to understand all of its internal mechanics, what kind of engine it has, how the gas makes it run, or even where the gas came from in order to know how to interact with it.In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.The Julia language also offers functional programming abilities.Modern, high-level languages like Python and Ruby are perfect examples of OOP.

*/
```

***generateToken(bit,prefix)*** This function will generate token. If prefix is present then it will add prefix and a dash `-` to the token. By default generateTiken() function generate 32 bit token.

```javascript
var rand = require('random-pro');
console.log(rand.generateToken());
// 2Zv32Kke
console.log(rand.generateToken(64));
// m6jpyBHz4ld8CN#L
console.log(rand.generateToken(64,"PRO"));
// PRO-YYq4W/+UAqDWmO6S
```

## License

 - **MIT** : http://opensource.org/licenses/MIT

## Author

***Prosen Ghosh*** <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)