import "jest";
import * as supertest from "supertest";
import app from "../app";

describe("Back-end test suite", () => {
  test("A simple ping", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hello there" });
  });
  test("Testing the POST without parameters", async () => {
    const response = await supertest(app).post("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Hi!" });
  });
  test("Testing the POST with parameters", async () => {
    const response = await supertest(app).post("/").send({ greeting: "Hello there" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "General Kenobi" });
  });
});