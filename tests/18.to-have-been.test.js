describe("to have been", () => {
  it("should call 2 times", () => {
    const callback = jest.fn(); // Membuat mock function
    callback(); // Memanggil callback sekali
    callback(); // Memanggil callback sekali lagi
    expect(callback).toHaveBeenCalledTimes(2); // Memastikan callback dipanggil dua kali
  });
  it("should callback call with parameters", () => {
    const callback = jest.fn(); // Membuat mock function
    callback(1, 2); // Memanggil callback dengan dua parameter
    expect(callback).toHaveBeenCalledWith(1, 2); // Memastikan callback dipanggil dengan parameter
  });
  it("should callback has been called last with parameters", () => {
    const callback = jest.fn(); // Membuat mock function
    callback(1, 2);
    callback(3, 4);
    expect(callback).toHaveBeenLastCalledWith(3, 4); // Memastikan callback dipanggil terakhir
  });
});
