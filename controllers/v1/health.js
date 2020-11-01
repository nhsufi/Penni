const express = require("express");
const router = express.Router();

router.get("/status", (_req, res, _next) => {
  res.status(200).json({
    body: "Penni backend is running",
  });
});

module.exports = router;
