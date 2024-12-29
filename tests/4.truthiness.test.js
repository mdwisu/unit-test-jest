test("truthiness", () => {
  const name = "John Doe";
  expect(name).toBeTruthy();
  expect(1).toBeTruthy();

  let value = null;
  expect(value).toBeNull();
  expect(value).toBeDefined();
  expect(value).toBeFalsy();

  value = undefined;
  expect(value).toBeUndefined();
  expect(value).toBeFalsy();
});
