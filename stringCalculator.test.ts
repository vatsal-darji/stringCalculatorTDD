import { stringCalculator } from "./stringCalculator";

test("returns 0 for empty string", () => {
  expect(stringCalculator.add("")).toBe(0);
});

test("returns number itself for single number", () => {
  expect(stringCalculator.add("1")).toBe(1);
});

test("returns sum of number for string of numbers", () => {
  expect(stringCalculator.add("1,2")).toBe(3);
});

test("returns sum of number for string of numbers when numbers have in new line", () => {
  expect(stringCalculator.add("1\n2\n3")).toBe(6);
});

test("supports custom delimiters", () => {
  expect(stringCalculator.add("//;\n1;2")).toBe(3);
});

test("throws an exception for negative numbers", () => {
  expect(() => stringCalculator.add("1,-2,3,-4")).toThrow(
    "Negatives not allowed: -2, -4"
  );
});

test("ignores numbers greater than 1000", () => {
  expect(stringCalculator.add("2,1001")).toBe(2);
});

test("supports multiple delimiters of any length", () => {
  expect(stringCalculator.add("//[***][%%]\n1***2%%3")).toBe(6);
});
