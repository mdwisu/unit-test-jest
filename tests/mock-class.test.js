import { UserRepository } from "../src/6.user-repository";
import { UserService } from "../src/6.user-service";

jest.mock("../src/6.user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  const user = { id: 1, name: "dwi" };
  service.save(user);
  expect(repository.save).toBeCalled();
  expect(repository.save).toBeCalledWith(user);
});

test("test mock class findById", () => {
  const user = { id: 1, name: "dwi" };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
});

test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "dwi" },
    { id: 2, name: "dwi" },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
