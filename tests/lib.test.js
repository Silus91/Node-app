const lib = require("../lib");
describe("absolute", () => {
  it(" should return positive number if imput is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it(" should return positive number if imput is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it(" should return zero number if imput is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("hujaaa");
    expect(result).toMatch(/hujaaa/);
    expect(result).toContain("hujaaa");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
  });
});

describe("registerUser", () => {
  it("should throw if user is falsy", () => {
    const args = [null, undefined, NaN, "", false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

  it("should return a user object if value username is passed", () => {
    const result = lib.registerUser("huj");
    expect(result).toMatchObject({ username: "huj" });
    expect(result.id).toBeGreaterThan(0);
  });
});
