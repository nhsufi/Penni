import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import api from "./controllers";
import { printRequests } from "./middlewares";

const app = express();
const port = process.env.PORT || 5000;

// Print requests middlware
if (process.env.NODE_ENV !== "test") {
  app.use(printRequests);
}

// bodyParser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// CORs middleware
app.use(cors());

// Configure app routes
app.use("/api", api);

// Serve our compiled React files middleware (__dirname resolves to dist folder in production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// Catch any bad requests
app.get("*", (_req, res) => {
  res.status(404).json({
    msg: "No API handler for this route",
  });
});

const server = app.listen(port, () =>
  console.log(`Penni App running in ${process.env.NODE_ENV} on port ${port}`)
);

export default server;
