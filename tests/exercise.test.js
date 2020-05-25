const exercise = require("../exercise");

describe("fizzbuzz", () => {
  it("should throw if not a number", () => {
    const args = [null, undefined, NaN, "", false];
    args.forEach((a) => {
      expect(() => {
        exercise.fizzBuzz(a);
      }).toThrow();
    });
  });

  it("should return fizzbuzz if number divide on 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return fizz if number divide on 3", () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return buzz if number divide on 5", () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return value if number dont divide on 5 and 3", () => {
    const result = exercise.fizzBuzz(2);
    expect(result).toBe(2);
  });
});
