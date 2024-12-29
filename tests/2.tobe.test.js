test("toBe example", () => {
  const a = 5;
  expect(a).toBe(5); // Benar, karena 5 === 5

  const obj = { name: "John" };
  expect(obj).toBe(obj); // Benar, karena referensi sama
});

test("toBe fails with different object reference", () => {
  const obj1 = { name: "John" };
  const obj2 = { name: "John" };

  expect(obj1).toBe(obj2); // Salah, karena referensi berbeda meskipun isi sama
});
