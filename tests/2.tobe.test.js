test("toBe example", () => {
  const a = 5;
  expect(a).toBe(5); // Value sama dengan expected, biasanya digunakan untuk value bukan object

  const obj = { name: "John" };
  expect(obj).toBe(obj); // Benar, karena referensi sama
});

test("toBe fails with different object reference", () => {
  const obj1 = { name: "John" };
  const obj2 = { name: "John" };

  expect(obj1).toBe(obj1); // Salah, jika referensi berbeda meskipun isi sama
});
