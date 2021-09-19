import { describe, expect, test } from "@jest/globals";
import app from "../app.js";
import * as supertest from "supertest";

const request = supertest(app);

test("testing", async () => {
  const resp = await request.get("/");
  expect(resp.body).toBe("ok");
});
