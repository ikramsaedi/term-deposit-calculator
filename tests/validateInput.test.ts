import { validateInput } from "../lib/validateInput";

describe("validateInput", () => {
  describe("for expected values", () => {
    const testCases = [
      [10000, 1.1, 3, undefined],
      [40000, 4.4, 3, 4],
      [5000, 10, 4, 5],
      [100000, 7, undefined, 3],
      [30000, 1.4, undefined, 9],
    ];

    testForValidInputs(testCases);
  });

  describe("for unexpected values", () => {
    const testCases: (number | undefined)[][] = [
      [10000, 1.1, 50, undefined],
      [-40000, 4.4, 3, 4],
      [5000, 30, 4, 5, 7208.33],
      [100000, 7, undefined, -3],
      [30000, 1.4, -10, undefined],
    ];

    testForInvalidInputs(testCases);
  });
});

function testForValidInputs(testCases: any[][]) {
  it.each(testCases)(
    `should not throw for startDeposit=%d, interestRate=%d, investmentTermYears=%d, investmentTermMonths=%d`,
    (startDeposit, interestRate, investmentTermYears, investmentTermMonths) => {
      expect(() => {
        validateInput(
          startDeposit,
          interestRate,
          investmentTermYears,
          investmentTermMonths
        );
      }).not.toThrow();
    }
  );
}
function testForInvalidInputs(testCases: any[][]) {
  it.each(testCases)(
    `should throw for startDeposit=%d, interestRate=%d, investmentTermYears=%d, investmentTermMonths=%d`,
    (startDeposit, interestRate, investmentTermYears, investmentTermMonths) => {
      expect(() => {
        validateInput(
          startDeposit,
          interestRate,
          investmentTermYears,
          investmentTermMonths
        );
      }).toThrow();
    }
  );
}
