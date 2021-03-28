import request from "supertest";
import app from "../../server";

describe("Status", () => {
  afterAll(async (done) => {
    app.close();
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
    done();
  });

  it("Should return 200 if server is running", async () => {
    const res = await request(app).get("/api/v1/status/");
    expect(res.status).toEqual(200);
  });

  it("Should return 401 if unauthenticated", async () => {
    const res = await request(app).get("/api/v1/status/checkAuth");
    expect(res.status).toEqual(401);
  });
});
