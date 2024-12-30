import { getAllProducts } from "../src/5.database";
import { ProductService } from "../src/5.product-service";

jest.mock("../src/5.database.js", () => {
  const originalModule = jest.requireActual("../src/5.database.js");
  return {
    ...originalModule,
    getAllProducts: jest.fn().mockResolvedValue([]),
    __esModule: true,
  };
});

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
  ];
  getAllProducts.mockReturnValue(products);
  expect(ProductService.findAll()).toEqual(products);
});

test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
});
