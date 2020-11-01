const express = require("express");
const router = express.Router();

router.use("/v1/health", require("./health"));

// Can add additional routes
// router.get('/', function(req, res) {
//   res.send('Home page')
// })

module.exports = router;
