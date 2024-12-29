test("array matcher", () => {
  const names = ["Muhammad", "Dwi", "Susanto"];
  expect(names).toContain("Muhammad"); // Memastikan value array memiliki item, dimana pengecekan item menggunakan toBe()
  expect(names).not.toContain("Jane Doe");
  expect(names).toEqual(["Muhammad", "Dwi", "Susanto"]);

  const persons = [{ name: "Muhammad" }, { name: "Dwi" }];
  expect(persons).toContainEqual({ name: "Muhammad" }); // Memastikan value array memiliki item, dimana pengecekan item menggunakan toEqual()
  expect(persons).toEqual([{ name: "Muhammad" }, { name: "Dwi" }]);
});
