/**
 * Calculate final balance of a term deposit using compound interest formula:
 *
 * A = P*(1+r/n)^(nt)
 *
 * resource: https://www.thecalculatorsite.com/finance/calculators/compound-interest-formula
 */
export function calculateCompoundInterest(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number,
  timesCompounded: number
) {
  const rateAsPercentage = interestRate / 100;
  const compoundInterest =
    (1 + rateAsPercentage / timesCompounded) **
    (timesCompounded * investmentTerm);

  return startDeposit * compoundInterest;
}
