import { getAllProducts, getProductById } from "../src/5.database";
import { ProductService } from "../src/5.product-service";

jest.mock("../src/5.database.js");

test("mock module getProductById", () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "Product " + id,
    };
  });
  const product = ProductService.findById(1);
  expect(product).toEqual({
    id: 1,
    name: "Product 1",
  });
});

test("mock module getAllProducts", () => {
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
  getAllProducts.mockReturnValueOnce(products);
  expect(ProductService.findAll()).toEqual(products);
});
