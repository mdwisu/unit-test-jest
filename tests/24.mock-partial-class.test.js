import { UserRepository } from "../src/6.user-repository";
import { UserService } from "../src/6.user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class findById", () => {
  const user = { id: 1, name: "dwi" };
  const fingByIdMock = jest.spyOn(repository, "findById");
  fingByIdMock.mockReturnValueOnce(user);

  expect(service.findById(1)).toEqual(user);
  expect(fingByIdMock).toHaveBeenCalled();
  expect(fingByIdMock).toHaveBeenCalledWith(1);
});
