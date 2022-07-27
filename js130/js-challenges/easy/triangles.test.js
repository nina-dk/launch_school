/* eslint-disable max-lines-per-function */
const { Triangle } = require("./triangles");

describe("Triangle class", () => {
  let equilateral;
  let isosceles;
  let scalene;

  beforeEach(() => {
    equilateral = new Triangle(40, 40, 40);
    isosceles = new Triangle(50, 50, 70);
    scalene = new Triangle(50, 40, 70);
  });

  test("throw error if input sides don't construct valid triangle", () => {
    expect(() => new Triangle(50, 0, 60)).toThrow(TypeError);
    expect(() => new Triangle(0, 0, 0)).toThrow(TypeError);
    expect(() => new Triangle(10, 20, 60)).toThrow(TypeError);
  });

  test("triangleType() determines the type of the triangle", () => {
    expect(equilateral.type).toEqual("equilateral");
    expect(isosceles.type).toEqual("isosceles");
    expect(scalene.type).toEqual("scalene");
  });

  test("equilateral triangles have all 3 sides equal", () => {
    expect(equilateral.type).toBe("equilateral");
    expect((new Triangle(2, 2, 2)).type).toBe("equilateral");
  });

  test("isosceles triangles have 2 equal sides", () => {
    expect(isosceles.type).toBe("isosceles");
    expect((new Triangle(3, 1, 3)).type).toBe("isosceles");
  });

  test("scalene triangles have no equal sides", () => {
    expect(scalene.type).toBe("scalene");
    expect((new Triangle(0.3, 0.5, 0.4)).type).toBe("scalene");
  });
});