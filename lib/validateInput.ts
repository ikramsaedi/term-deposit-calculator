import { getInvestmentTermInYears } from "./getInvestmentTermInYears";

/**
 * This validates the CLI arguments passed through to termDepositCalculator
 * If any of the inputs are invalid, it will throw an error.
 */
export function validateInput(
  startDeposit: number,
  interestRate: number,
  investmentTermYears: number | undefined,
  investmentTermMonths: number | undefined
) {
  if (!investmentTermMonths && !investmentTermYears) {
    throw new Error(
      "Investment term must be specified using --investment-term-years and/or --investment-term-months"
    );
  }

  const investmentTerm = getInvestmentTermInYears(
    investmentTermYears,
    investmentTermMonths
  );
  if (investmentTerm <= 0 || investmentTerm > 5) {
    throw new Error(
      "Total investment term must be greater than 0 and less than or equal to 5 years."
    );
  }

  if (startDeposit <= 0 || startDeposit > 10000000) {
    throw new Error(
      "Start deposit must be greater than 0 and less than or equal to 10,000,000"
    );
  }

  if (interestRate <= 0 || interestRate > 15) {
    throw new Error(
      "Interest rate must be greater than 0 and less than or equal to 15%."
    );
  }
}
