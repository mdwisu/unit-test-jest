import { sum } from "../src/1.sum";

beforeEach(() => {
  console.log("Before each");
});
beforeAll(() => {
  console.log("Before all");
});
afterEach(() => {
  console.log("after each");
});
afterAll(() => {
  console.log("after all");
});
test("first test", () => {
  console.log("first test");
});
test("second test", () => {
  console.log("second test");
});
describe('inner scope', () => {
  beforeAll(() => {
    console.log("Before all inner scope");
  })
  afterAll(() => {
    console.log("after all inner scope");
  })
  beforeEach(() => {
    console.log("Before each inner scope");
  })
  afterEach(() => {
    console.log("after each inner scope");
  })
  test("first test inner scope", () => {
    console.log("first test inner scope");
  });
  test("second test inner scope", () => {
    console.log("second test inner scope");
  });
  describe('inner scope', () => {
    test("first test inner scope", () => {
      console.log("first test inner scope");
    })
  });
});
