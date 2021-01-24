import express from "express";
import { checkJwt } from "../../middlewares";

const router = express.Router();

// GET /api/v1/status
router.get("/", (_req, res, _next) => {
  res.status(200).json({
    body: "Penni backend is running",
  });
});

// GET /api/v1/status/checkAuth
router.get("/checkAuth", checkJwt, (_req, res, _next) => {
  res.status(200).json({
    body: "Request is authenticated",
  });
});

export default router;
