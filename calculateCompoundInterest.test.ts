import { calculateCompoundInterest } from "./calculateCompoundInterest";

describe("calculateCompoundInterest", () => {
  describe("for valid values", () => {
    it("returns ", () => {
      const startDeposit = 10000;
      const interestRate = 1.1;
      const investmentTerm = 3;
      const timesCompounded = 12;
      const result = calculateCompoundInterest(
        startDeposit,
        interestRate,
        investmentTerm,
        timesCompounded
      );
      expect(result).toBeCloseTo(10335.35);
    });
  });
});
