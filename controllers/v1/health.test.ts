import request from "supertest";
import app from "../../server";

describe("Status", () => {
  afterAll(async (done) => {
    await app.close();
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    done();
  });

  it("Should return 401 if unauthenticated", async () => {
    const res = await request(app).get("/api/v1/health/status");
    expect(res.status).toEqual(401);
  });
});
