const axios = require("axios");

const mem = new Map();

const UsersController = {
  mem: mem,
  getUsers(req, res) {
    const count = mem.get("user") || 0;
    if (count >= 2) {
      res.status(403).send({ error: "Rate Limit Exceeded" });
      return;
    }
    mem.set("user", count + 1);
    this.oldGetUsers(req, res);
  },

  oldGetUsers(req, res) {
    axios
      .get("https://api.github.com/users")
      .then((result) => {
        res.send({ users: result.data });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ error: "Internal Server Error" });
      });
  },
};

module.exports.UsersController = UsersController;
