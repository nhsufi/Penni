import express from "express";
import { checkJwt } from "../../middlewares";

const router = express.Router();

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

export default router;
