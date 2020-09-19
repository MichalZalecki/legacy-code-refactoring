const axios = require("axios");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const UsersController = {
  getUsers(req, res) {
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

app.get("/users", UsersController.getUsers);

app.listen(PORT, () => {
  console.log(`Started http://localhost:${PORT}`);
});
