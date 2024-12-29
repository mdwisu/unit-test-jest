import { sum } from "../src/1.sum";

// Function akan dieksekusi sebelum unit test berjalan, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali
beforeEach(() => {
  console.log("Before each");
});
beforeAll(() => {
  console.log("Before all");
});

// Function akan dieksekusi setelah unit test selesai, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali
afterEach(() => {
  console.log("after each");
});
afterAll(() => {
  console.log("after all");
});

test("first test", () => {
  console.log(expect(sum(1, 2)).toBe(3));
});
test("second test", () => {
  console.log(expect(sum(1, 2)).toBe(3));
});
