const express = require("express");
const { UsersController } = require("./UsersController");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/users", UsersController.getUsers);

app.listen(PORT, () => {
  console.log(`Started http://localhost:${PORT}`);
});
