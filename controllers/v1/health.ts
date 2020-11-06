import express from "express";

const router = express.Router();

// GET /api/v1/health/status
router.get("/status", (_req, res, _next) => {
  res.status(200).json({
    body: "Penni backend is running and the request is authenticated",
  });
});

export default router;
