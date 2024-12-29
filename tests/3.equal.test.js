test("test toBe", () => {
  const nama = "John Doe";
  const hello = "Hello, " + nama;
  expect(hello).toBe("Hello, John Doe");
  expect(1 + 1).toBe(2);
});

test("test toEqual", () => {
  let person = { name: "John Doe" };
  expect(person).toEqual({ name: "John Doe" }); // Value sama dengan expected, dimana membandingkan semua properties secara recursive, atau dikenal dengan deep equality

  expect(person).not.toEqual({ name: "Jane Doe" });
  expect(1 + 1).toEqual(2);
});
