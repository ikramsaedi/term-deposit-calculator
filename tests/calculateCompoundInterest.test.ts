import { calculateCompoundInterest } from "../lib/calculateCompoundInterest";
import { calculateTermDepositMonthly } from "../lib/helpers";

describe("calculateCompoundInterest", () => {
  describe("for valid values it returns the correct interest rate", () => {
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

describe("calculateTermDepositMonthly", () => {
  it("for valid values it returns the correct interest rate", () => {
    const startDeposit = 10000;
    const interestRate = 1.1;
    const investmentTerm = 3;

    const result = calculateTermDepositMonthly(
      startDeposit,
      interestRate,
      investmentTerm
    );

    expect(result).toBe("10335.35");
  });
});
