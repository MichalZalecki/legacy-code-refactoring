const { UsersController } = require("./UsersController");

const TestableUsersController = UsersController;

TestableUsersController.oldGetUsers = jest.fn();

const send = jest.fn();
const status = jest.fn(() => ({ send }));
const req = {};
const res = { send, status };

describe("UsersController", () => {
  describe("getUsers", () => {
    beforeEach(() => {
      TestableUsersController.mem.clear();
    });

    it("rate limits getUsers calls", () => {
      TestableUsersController.getUsers(req, res);
      TestableUsersController.getUsers(req, res);
      expect(TestableUsersController.oldGetUsers).toHaveBeenCalledTimes(2);
      jest.clearAllMocks();
      TestableUsersController.getUsers(req, res);
      expect(send).toHaveBeenCalledWith({ error: "Rate Limit Exceeded" });
      expect(status).toHaveBeenCalledWith(403);
    });

    it("returns users", () => {
      TestableUsersController.getUsers(req, res);
      expect(TestableUsersController.oldGetUsers).toHaveBeenCalledTimes(1);
      expect(TestableUsersController.oldGetUsers).toHaveBeenCalledWith(
        req,
        res
      );
    });
  });
});
