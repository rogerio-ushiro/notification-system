import express from "express";
var router = express.Router();
import {
  getAll,
  sendNotification,
} from "../controllers/notificationController";

router.get("/", async (req, res) => {
  res.json({ requestBody: await getAll() });
});

router.post("/create", async (req, res) => {
  res.json({ requestBody: await sendNotification(req, res) });
});

module.exports = router;
