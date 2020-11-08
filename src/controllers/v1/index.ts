import express from "express";
import statusApi from "./status";

const router = express.Router();

router.use("/status", statusApi);

// Can add additional routes
// router.get('/', (req, res) => {
//   res.send('Home page')
// })

export default router;
