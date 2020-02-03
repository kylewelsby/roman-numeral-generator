import RomanNumeralParser from "../index";

let rnp = new RomanNumeralParser();

it('converts number to Roman Numerals', () => {
  expect(rnp.generate(1)).toEqual("I");
  expect(rnp.generate(5)).toEqual("V");
  expect(rnp.generate(10)).toEqual("X");
  expect(rnp.generate(20)).toEqual("XX");
  expect(rnp.generate(246)).toEqual("CCXLVI");
  expect(rnp.generate(789)).toEqual("DCCLXXXIX");
  expect(rnp.generate(1009)).toEqual("MIX");
  expect(rnp.generate(2014)).toEqual("MMXIV");
  expect(rnp.generate(2020)).toEqual("MMXX");
  expect(rnp.generate(2421)).toEqual("MMCDXXI");
  expect(rnp.generate(3999)).toEqual("MMMCMXCIX");
});

it('converts number to Roman Numerals (additive)', () => {
  let rnp = new RomanNumeralParser("additive");
  expect(rnp.generate(4)).toEqual("IIII");
  expect(rnp.generate(9)).toEqual("VIIII");
  expect(rnp.generate(24)).toEqual("XXIIII");
  expect(rnp.generate(40)).toEqual("XXXX");
  expect(rnp.generate(90)).toEqual("LXXXX");
  expect(rnp.generate(400)).toEqual("CCCC");
  expect(rnp.generate(900)).toEqual("DCCCC");
})

it("converts number to Roman Numerals (no IV)", () => {
  let rnp = new RomanNumeralParser('noIV');
  expect(rnp.generate(44)).toEqual("XLIIII");
});

it("throws an error when given numbers equal to or hight than 4000", () => {
  expect(() => rnp.generate(4000)).toThrowError("Number too large");
});

it("throws an error when given a float number", () => {
  expect(() => rnp.generate(1.1)).toThrowError("Input is not a number");
});

it("throws an error when given a non number", () => {
  expect(() => rnp.generate("abc")).toThrowError("Input is not a number");
});
