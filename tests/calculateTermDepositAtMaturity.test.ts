import { calculateTermDepositAtMaturity } from "../lib/calculateTermDepositAtMaturity";

describe("calculateTermDepositAtMaturity", () => {
  describe("for expected values", () => {
    const testCases = [
      [10000, 1.1, 3, 10330],
      [40000, 4.4, 3 + 4 / 12, 45866.67],
      [5000, 10, 4 + 5 / 12, 7208.33],
      [100000, 7, 3 / 12, 101750],
      [30000, 1.4, 9 / 12, 30315],
    ];
    testCalculateTermDepositAtMaturity(testCases);
  });
});

function testCalculateTermDepositAtMaturity(testCases: number[][]) {
  it.each(testCases)(
    `calculates correct final balance for startDeposit=%d, interestRate=%d, investmentTerm=%d`,
    (startDeposit, interestRate, investmentTerm, expected) => {
      const result = calculateTermDepositAtMaturity(
        startDeposit,
        interestRate,
        investmentTerm
      );
      expect(result).toBeCloseTo(expected);
    }
  );
}
