describe("logspy", () => {
  let logSpy;

  function sum(a, b) {
    console.log(a + b);
  }

  beforeEach(() => {
    // .mockImplementation(() => {}) mengembalikan nilai default, mengganti implementasi asli dari sebuah fungsi selama pengujian
    //  implementasi asli dari console.log akan digantikan oleh fungsi kosong selama pengujian. Ini mencegah console.log benar-benar mencetak apa pun ke terminal.
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it("should log the sum", () => {
    sum(1, 2);
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
