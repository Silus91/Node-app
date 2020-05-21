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
