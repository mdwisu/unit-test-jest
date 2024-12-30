import { sumAll } from "../src/1.sum";

const table = [
  [[10, 10, 10], 30],
  [[1, 2, 3], 6],
  [[1, 2, 3, 4, 5], 15],
];

it.each(table)("test sumAll", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});

const table2 = [
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [1, 2, 3], expected: 6 },
  { numbers: [1, 2, 3, 4, 5], expected: 15 },
];
it.each(table2)("test sumAll", ({ numbers, expected }) => {
  expect(sumAll(numbers)).toBe(expected);
});
