test("string matcher", () => {
  const name = "John Doe";
  expect(name).toMatch(/ohn/); //match value dengan regex
  expect(name).not.toMatch(/doe/);
  expect(name).toMatch(/john/i); // case insensitive
  expect(name).toBe("John Doe");
  expect(name).toEqual("John Doe");
});
