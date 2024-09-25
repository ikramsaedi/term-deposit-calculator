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
