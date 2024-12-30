import { calculate, calculateAndReturn } from "../src/1.sum";

it("test calculate", () => {
  const callback = jest.fn(); // Membuat mock function

  calculate([1, 2, 3], callback);
  calculate([1, 2, 3, 4, 5, 6], callback);

  expect(callback.mock.calls.length).toBe(2); // Memastikan callback dipanggil dua kali
  expect(callback.mock.calls[0][0]).toBe(6); // memastikan hasil pemanggilan pertama adalah 6
  expect(callback.mock.calls[1][0]).toBe(21); // memastikan hasil pemanggilan kedua adalah 21
});

it("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(100); // Mengembalikan nilai 100 untuk pertama kali dan dipakai sekali
  callback.mockReturnValueOnce(200); // Mengembalikan nilai 200 untuk kedua kali dan dipakai sekali

  expect(calculateAndReturn([1, 2, 3], callback)).toBe(100);
  expect(calculateAndReturn([1, 2, 3, 4, 5, 6], callback)).toBe(200);

  expect(callback.mock.results[0].value).toBe(100); // Memastikan nilai kembalian pertama adalah 100
  expect(callback.mock.results[1].value).toBe(200);
});

it("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => total * 2); // Mengembalikan nilai 100 untuk pertama kali

  expect(calculateAndReturn([1, 2, 3], callback)).toBe(12);
  expect(calculateAndReturn([1, 2, 3, 4, 5, 6], callback)).toBe(42);

  expect(callback.mock.results[0].value).toBe(12); // Memastikan nilai kembalian pertama adalah 200
  expect(callback.mock.results[1].value).toBe(42);
});
