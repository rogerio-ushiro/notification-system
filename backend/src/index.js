import express from "express";
import cors from "cors";
import { createDefault } from "./controllers/defaultController";
createDefault();

const port = 4000;
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var usersRouter = require("./routes/users");
var notificationRouter = require("./routes/notifications");

app.use("/users/", usersRouter);
app.use("/notifications/", notificationRouter);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = app;