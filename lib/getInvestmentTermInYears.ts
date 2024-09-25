import { convertMonthsToYears } from "./convertMonthsToYears";

/**
 * This combines the investment term in years and months into a single investment term number.
 *
 * This just allows us to standardise the investment term so we don't have to have separate logic
 * for months vs years.
 */
export function getInvestmentTermInYears(
  investmentTermYears: number | undefined,
  investmentTermMonth: number | undefined
) {
  let investmentTerm = 0;
  if (investmentTermYears) {
    investmentTerm += investmentTermYears;
  }

  if (investmentTermMonth) {
    investmentTerm += convertMonthsToYears(investmentTermMonth);
  }

  if (investmentTerm === 0) {
    throw new Error(
      "Something went wrong when calculating your investment term. We should have an investment term larger than 0!"
    );
  }

  return investmentTerm;
}
