import { printMonthlyInterest } from "../lib/printMonthlyInterest";

describe("printMonthlyInterest", () => {
  it("prints correct monthly interest for an investment term of 3 months", () => {
    const result = printMonthlyInterest(10000, 3, 1.1);
    const expectedResult =
      "1 9.16666666666606 10009.166666666666\n2 18.34173611111146 10018.341736111111\n3 27.525216035879566 10027.52521603588\n";
    expect(result).toEqual(expectedResult);
  });
});
