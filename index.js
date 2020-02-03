/**
 * @author Kyle Welsby
 * @version 0.0.1
 *
 * @module RomanNumberalGenerator
 */

const SYMBOLS = "IVXLCDM".split('')

export default class RomanNumberalGenerator {
  /**
   *
   * @param {string} [mode=subtractive] - Change the output mode to fit a couple well known formats.
   *    <br>
   *     - additive - Return addiative formatting, e.g. 4 = "IIII", 40 = "XXXX", 400 = "CCCC"
   * <br>
   *    - noIV - Returns subtrative format only coverting 4's to "IIII", useful on clockfaces.
   */
  constructor(mode = "subtractive") {
    this.mode = mode;
  }

  get isSubtractive() {
    return !this.isAdditive;
  }

  get isAdditive() {
    return this.mode === "additive";
  }

  get noIV() {
    return this.mode.toLowerCase() === "noiv";
  }

  /**
   * @function
   * Converts a given number to a roman numeral string
   * 
   * @param {number} input Number to convert to Roman Numerals
   * @returns {string} Roman Numeral string
   *
   * @example
   *
   *   var rng = RomanNumberalsGenerator()
   * rng.generate(2020)
   *   // "MMXX"
   */
  generate(input) {
    if (!Number.isInteger(input)) {
      throw new Error("Input is not a number");
    }
    if (input >= 4000) {
      throw new Error("Number too large");
    }

    const tokens = this._tokenize(input)
    return tokens.map(t => t.body).join('')
  }

  /**
   * @private
   * @function _tokenize
   * Converts the number into an array of tokens with a symbol type representing a kind of lexical unit. 
   * @param {number} input input number to tokenize
   * @returns {array} token
   */
  _tokenize(input) {
    const str = input.toString();
    let l = 0;
    let c = str.charAt(l);
    let tokens = [];
    while (c) {
      let txt = str.substr(l);
      if (txt.length === 4) {
        tokens.push({
          body: this._thousands(c),
          type: 'THOUSAND'
        })
      }
      if (txt.length === 3) {
        tokens.push({
          body:  this._hundreds(c),
          type: "HUNDRED"
        })
      }
      if (txt.length === 2) {
        tokens.push({
          body: this._tens(c),
          type: "TEN"
        });
      }
      if (txt.length === 1) {
        tokens.push({
          body: this._ones(c),
          type: "ONE"
        });
      }
      l++;
      c = str.charAt(l);
    }
    return tokens
  }

  /**
   * @private
   * @param {string} char - Parse thousant number character to Roman Numeral symbol "M"
   */
  _thousands(char) {
    let symbols = SYMBOLS.slice(6, 7);
    return this._generateNotation(symbols, char, this.isSubtractive);
  }

  /**
   * @private
   * @param {string} char - Parse thousant number character to Roman Numeral symbol "C" with "D" for beyond 5
   */
  _hundreds(char) {
    let symbols = SYMBOLS.slice(4, 7)
    return this._generateNotation(symbols, char, this.isSubtractive);
  }

  /**
   * @private
   * @param {string} char - Parse thousant number character to Roman Numeral symbol "X" with "L" for beyond 5
   */
  _tens(char) {
    let symbols = SYMBOLS.slice(2, 5)
    return this._generateNotation(symbols, char, this.isSubtractive);
  }

  /**
   * @private
   * @param {string} char - Parse thousant number character to Roman Numeral symbol "I" with "V" for beyond 5
   */
  _ones(char) {
    let symbols = SYMBOLS.slice(0, 3)
    let isSubtractive = !this.noIV && this.isSubtractive;
    return this._generateNotation(symbols, char, isSubtractive);
  }

  /**
   * @private
   *
   * @function _generateNotation
   *
   * Converts a number into a pattern of provided Symbols.
   *
   * @param {array} symbols Given symbols to use through the different formatting options
   * @param {nuber} int Input number to decide which symbols to use in the place.
   * 
   * @returns {string} Roman Numeral notation for the given unit
   */
  _generateNotation(symbols, char, isSubtractive) {
    let int = parseInt(char);
    let out = "";
    let counter = 0;

    if (int < 5) {
      if (isSubtractive && int === 4) {
        counter = 4;
        out += symbols[0];
        out += symbols[1];
      }
    } else {
      counter = 5;
      if (isSubtractive && int === 9) {
        counter = 9;
        out += symbols[0];
        out += symbols[2];
      } else {
        out += symbols[1];
      }
    }

    while (counter < int) {
      out += symbols[0];
      counter++;
    }
    return out;
  }
}
