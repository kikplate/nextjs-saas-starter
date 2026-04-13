import { describe, expect, it } from "vitest";

import { createUserBodySchema, userIdParamSchema } from "./user-validators";

describe("createUserBodySchema", () => {
  it("accepts valid input", () => {
    const r = createUserBodySchema.safeParse({
      email: "a@b.co",
      name: "  Ada  ",
    });
    expect(r.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const r = createUserBodySchema.safeParse({ email: "nope", name: "x" });
    expect(r.success).toBe(false);
  });
});

describe("userIdParamSchema", () => {
  it("accepts uuid", () => {
    expect(
      userIdParamSchema.safeParse("550e8400-e29b-41d4-a716-446655440000").success,
    ).toBe(true);
  });

  it("rejects non-uuid", () => {
    expect(userIdParamSchema.safeParse("not-uuid").success).toBe(false);
  });
});
