import { NextFunction, Request, Response } from "express";
import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Authorization
export const checkJwt = jwt({
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
export const printRequests = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
};

export default { checkJwt, printRequests };
