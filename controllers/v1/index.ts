import express from "express";
import healthApi from "./health";

const router = express.Router();

router.use("/health", healthApi);

// Can add additional routes
// router.get('/', (req, res) => {
//   res.send('Home page')
// })

export default router;
