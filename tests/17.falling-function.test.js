import { sayHello } from "../src/3.sayHello";

test("sayHello Success", () => {
  expect(sayHello("dwi")).toBe("Hello dwi");
});

test.failing("sayHello Failed", () => {
  sayHello(null);
});
