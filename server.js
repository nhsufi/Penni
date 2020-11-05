const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const api = require("./controllers");
const { printRequests, checkJwt } = require("./middlewares");

const app = express();
const port = process.env.PORT || 5000;

// Print requests middlware
app.use(printRequests);

// bodyParser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// CORs middleware
app.use(cors());

// Auth middleware
app.use(checkJwt);

// Configure app routes
app.use("/api", api);

// This middleware informs the express application to serve our compiled React files
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (_req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Catch any bad requests
app.get("*", (_req, res) => {
  res.status(404).json({
    msg: "No API handler for this route",
  });
});

app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
