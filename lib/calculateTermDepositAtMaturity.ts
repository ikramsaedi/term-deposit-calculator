/**
 *
 * @param startDeposit
 * @param interestRate
 * @param investmentTerm
 * Uses simple interest formula
 */
export function calculateTermDepositAtMaturity(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  const simpleInterest = (startDeposit * interestRate * investmentTerm) / 100;
  return startDeposit + simpleInterest;
}
