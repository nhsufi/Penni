const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Authorization
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKS_URI,
  }),

  // Validate the audience and the issuer.
  audience: process.env.JWT_AUDIENCE,
  issuer: process.env.JWT_ISSUER,
  algorithms: ["RS256"],
});

// Print requests
const printRequests = (req, _res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
};

module.exports = { checkJwt, printRequests };
