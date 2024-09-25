import { calculateCompoundInterest } from "../lib/calculateCompoundInterest";

describe("calculateCompoundInterest", () => {
  describe("when calculating term deposit that is compounded monthly", () => {
    it("returns correct final balance", () => {
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
