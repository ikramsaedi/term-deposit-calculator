import { calculateCompoundInterest } from "../lib/calculateCompoundInterest";

describe("calculateCompoundInterest", () => {
  describe("for expected values", () => {
    const testCases = [
      [10000, 1.1, 3, 12, 10335.35],
      [40000, 4.4, 3 + 4 / 12, 4, 46281.64],
      [5000, 10, 4 + 5 / 12, 1, 7617.07],
      [100000, 7, 3 / 12, 12, 101760.23],
      [30000, 1.4, 9 / 12, 4, 30316.1],
    ];
    testCalculateCompoundInterest(testCases);
  });

  describe("for negative interest rates", () => {
    const testCases = [[30000, -1.4, 9 / 12, 4, 29686.1]];
    testCalculateCompoundInterest(testCases);
  });

  describe("for non traditional number of times compounded", () => {
    const testCases = [[30000, 1.4, 9 / 12, 6, 30316.29]];
    testCalculateCompoundInterest(testCases);
  });

  describe("if investment term is invalid", () => {
    it("when term is 0, it should throw an error", () => {
      const startDeposit = 10000;
      const interestRate = 1.1;
      const investmentTerm = 0;
      const timesCompounded = 4;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });
    it("when term is negative, it should throw an error", () => {
      const startDeposit = 10000;
      const interestRate = 1.1;
      const investmentTerm = -3;
      const timesCompounded = 4;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });
  });

  describe("if startDeposit is invalid", () => {
    it("when start deposit is 0, it should throw an error", () => {
      const startDeposit = 0;
      const interestRate = 1.1;
      const investmentTerm = 3;
      const timesCompounded = 4;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });

    it("when start deposit is negative, it should throw an error", () => {
      const startDeposit = -3000;
      const interestRate = 1.1;
      const investmentTerm = 3;
      const timesCompounded = 4;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });
  });

  describe("if timesCompounded is invalid", () => {
    it("when timesCompounded is 0, it should throw an error", () => {
      const startDeposit = 3000;
      const interestRate = 1.1;
      const investmentTerm = 3;
      const timesCompounded = 0;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });
    it("when timesCompounded is negative, it should throw an error", () => {
      const startDeposit = 3000;
      const interestRate = 1.1;
      const investmentTerm = 3;
      const timesCompounded = -5;

      expect(() => {
        calculateCompoundInterest(
          startDeposit,
          interestRate,
          investmentTerm,
          timesCompounded
        );
      }).toThrow();
    });
  });
});

function testCalculateCompoundInterest(testCases: number[][]) {
  it.each(testCases)(
    `calculates correct compound interest for startDeposit=%d, interestRate=%d, investmentTerm=%d, timesCompounded=%d`,
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
}
