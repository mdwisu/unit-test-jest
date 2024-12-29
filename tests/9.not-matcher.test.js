test("string.not.matcher", () => {
  const name = "John Doe";
  expect(name).not.toBe("johndoe");
  expect(name).not.toEqual("johndoe");
  expect(name).not.toMatch(/johnd/i); // case insensitive
});

test("number.not.matcher", () => {
  const value = 2 + 2; // 4
  expect(value).not.toBeGreaterThan(5);
  expect(value).not.toBeGreaterThanOrEqual(4.1);
  expect(value).not.toBeLessThan(3.9);
  expect(value).not.toBeLessThanOrEqual(3.9);
  expect(value).not.toBe(3);
  expect(value).not.toEqual(3);
});
