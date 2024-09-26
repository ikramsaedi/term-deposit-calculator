/**
 * Calculate final balance for a term deposit that does not have compounding interest
 * as interest is only paid out at the end of the investment term.
 *
 * As such, this uses the simple interest formula: S.I. = (P × R × T)/100
 *
 * resource: https://www.cuemath.com/commercial-math/simple-interest/
 */
export function calculateTermDepositAtMaturity(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  validate(startDeposit, investmentTerm);
  const simpleInterest = (startDeposit * interestRate * investmentTerm) / 100;
  return startDeposit + simpleInterest;
}

function validate(startDeposit: number, investmentTerm: number) {
  if (investmentTerm <= 0) {
    throw new Error("Investment term must be greater than 0.");
  }

  if (startDeposit <= 0) {
    throw new Error("Start deposit must be greater than 0.");
  }
}
