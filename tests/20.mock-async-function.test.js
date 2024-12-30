import { getBalance } from "../src/4.async";

test("mock async function", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("dwi", from)).resolves.toEqual({
    name: "dwi",
    balance: 1000,
  });

  await expect(from).toBeCalledTimes(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function failed", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Failed"));
  await getBalance("dwi", from);
});
