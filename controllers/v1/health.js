const express = require("express");
const router = express.Router();
const { checkJwt } = require("../../middlewares");

router.get("/status", (_req, res, _next) => {
  res.status(200).json({
    body: "Penni backend is running",
  });
});

router.get("/checkAuth", (_req, res, _next) => {
  res.status(200).json({
    body: "Authenticated",
  });
});

module.exports = router;
