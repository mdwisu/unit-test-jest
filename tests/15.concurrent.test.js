import { sayHelloAsync } from "../src/2.async";

describe("concurent", () => {
  it("concurent 1", async () => {
    await expect(sayHelloAsync("dwi")).resolves.toBe("Hello dwi");
  });
  it("concurent 2", async () => {
    await expect(sayHelloAsync("dwi")).resolves.toBe("Hello dwi");
  });
  it("concurent 3", async () => {
    await expect(sayHelloAsync("dwi")).resolves.toBe("Hello dwi");
  });
});
