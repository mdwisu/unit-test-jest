class MyException extends Error {}

function callMe(name) {
  if (name === "Dwi") {
    throw new MyException("Dwi is not allowed");
  } else {
    return "OK";
  }
}

test("exception matcher", () => {
  expect(() => callMe("Dwi")).toThrow(); // Memastikan terjadi exception
  expect(() => callMe("Dwi")).toThrow(MyException); // Memastikan terjadi exception sesuai dengan expected exception
  expect(() => callMe("Dwi")).toThrow("Dwi is not allowed"); // Memastikan terjadi exception sesuai dengan string message
});
