import { sayHelloAsync } from "../src/2.async";

test("async example", async () => {
  const result = await sayHelloAsync("dwi");
  expect(result).toBe("Hello dwi");
  await expect(sayHelloAsync("dwi")).resolves.toBe("Hello dwi");
  await expect(sayHelloAsync()).rejects.toThrow("Name is empty");
});
