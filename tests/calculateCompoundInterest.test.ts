import { calculateCompoundInterest } from "../lib/calculateCompoundInterest";

describe("calculateCompoundInterest", () => {
  it.each([[10000, 1.1, 3, 12, 10335.35]])(
    `should calculate correct compound interest for startDeposit=%d, interestRate=%d, investmentTerm=%d, timesCompounded=%d`,
    (startDeposit, interestRate, investmentTerm, timesCompounded, expected) => {
      const result = calculateCompoundInterest(
        startDeposit,
        interestRate,
        investmentTerm,
        timesCompounded
      );
      expect(result).toBeCloseTo(expected);
    }
  );
});
