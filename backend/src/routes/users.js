import express from "express";
var router = express.Router();
import { getAll } from "../controllers/userController";

router.get("/", async (req, res) => {
  res.json({ requestBody: await getAll() });
});

module.exports = router;
