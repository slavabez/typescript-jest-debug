import "jest";
import * as supertest from "supertest";
import app from "../app";

describe("Back-end test suite", () => {
  test("A simple ping", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
  });
  test("Testing the POST with parameters", async () => {});
});