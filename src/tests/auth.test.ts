import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth.ts";
import { IncomingHttpHeaders } from "http";

test("header should have token", () => {
  const request = {
    headers: {
      authorization: "ApiKey test-token",
    } as IncomingHttpHeaders,
  };
  expect(getAPIKey(request.headers)).toBe("test-token");
});

test("header should bot have token", () => {
  const request = {
    headers: {
      authorization: "test-token",
    } as IncomingHttpHeaders,
  };
  expect(getAPIKey(request.headers)).toBe(null);
});

test("header doesnt exist", () => {
  const request = {
    headers: {} as IncomingHttpHeaders,
  };
  expect(getAPIKey(request.headers)).toBe(null);
});
