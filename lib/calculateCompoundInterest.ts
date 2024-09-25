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
  validate(startDeposit, investmentTerm, timesCompounded);

  const rateAsPercentage = interestRate / 100;
  const compoundInterest =
    (1 + rateAsPercentage / timesCompounded) **
    (timesCompounded * investmentTerm);

  return startDeposit * compoundInterest;
}

function validate(
  startDeposit: number,
  investmentTerm: number,
  timesCompounded: number
) {
  if (investmentTerm <= 0) {
    throw new Error("Investment term must be greater than 0.");
  }

  if (startDeposit <= 0) {
    throw new Error("Start deposit must be greater than 0.");
  }

  if (timesCompounded <= 0) {
    throw new Error("Times compounded must be greater than 0.");
  }
}
