import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

describe("auth.ts", () => {
  test.for([
    {value: {}, expected: null},
    {value: {"auth": ""}, expected: null},
    {value: {"authorization": "Bearer XXXXXXXXXXXXXXXXX"}, expected: null},
    {value: {"authorization": "Bearer"}, expected: null},
    {value: {"authorization": "APIKEY XXXXXXXXXXXXXXXXX"}, expected: null},
    {value: {"authorization": "ApiKey"}, expected: null},
    {value: {"authorization": "ApiKey XXXXXXXXXXXXXXXXX"}, expected: "XXXXXXXXXXXXXXXXX"}
  ])("getAPIKey($value) -> $expected", ({value, expected}) => {
    const headers: IncomingHttpHeaders = value
    const result = getAPIKey(headers)
    expect(result).toBe(expected)
  })
});
