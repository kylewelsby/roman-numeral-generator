# Roman Numeral Generator
![Main](https://github.com/kylewelsby/roman-numeral-generator/workflows/Main/badge.svg)
[![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://www.npmjs.com/package/prettier)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat)](https://twitter.com/acdlite/status/974390255393505280)

A simple dependencyless [Roman Numeral](https://en.wikipedia.org/wiki/Roman_numerals) generator to convert numbers to roman numerals.

**note: this code is part of a code challenge, there will be no intended maintance and will be archived after some time.**

Supports `subtractive` (default), `addative` and `noIV` notation modes. 

#### Subtractive notation

Subtractive notation is used to make a shorter output where `IV` "one less than 5" and `IX` "one less than 10" are output instead of `IIII` and `VIIII` respectively. 

#### Addative notation

Addative notation is more verbose resulting in longer outputs where 4 is `IIII`, 9 is `VIIII` instead of `IV` ("one less than 5") and `IX` ("one less than 10") respectively

#### No `IV`

A subtle mix of subtractive and addative is used in some cases, such as the number 4 on a modern clock face.  
No `IV` will ensure `IIII` for the number 4 is retained in subtractive notations. 

## 🎲 Installation

    npm install kylewelsby/roman-numeral-generator

## 🎯 Useage

```javascript
import RomanNumeralGenerator from 'roman-numeral-generator'
rng = new RomanNumeralGenerator()
rng.generate(2020)
// "MMXX"
```

## 🤖 Testing

    npm run test

### Testing with code coverage

    npm run test:cov


## 👤 Author

**Kyle Welsby <kyle@mekyle.com> (https://mekyle.com)**

* Twitter: [@halfcube](https://twitter.com/halfcube)
* Github: [@kylewelsby](https://github.com/kylewelsby)

[Bootstrapped from ES6 + Jest boilerplate repo](https://github.com/kylewelsby/init-es6-jest)

## 🎓 License

MIT: https://kylewelsby.mit-license.org