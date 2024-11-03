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
