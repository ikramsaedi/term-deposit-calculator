import { calculateCompoundInterest } from "./calculateCompoundInterest";

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

export function calculateTermDepositAnnually(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  const compoundInterest = calculateCompoundInterest(
    startDeposit,
    interestRate,
    investmentTerm,
    1
  );

  return compoundInterest.toFixed(2);
}

export function calculateTermDepositQuarterly(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  const compoundInterest = calculateCompoundInterest(
    startDeposit,
    interestRate,
    investmentTerm,
    4
  );

  return compoundInterest.toFixed(2);
}

export function calculateTermDepositMonthly(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  const compoundInterest = calculateCompoundInterest(
    startDeposit,
    interestRate,
    investmentTerm,
    12
  );

  return compoundInterest.toFixed(2);
}
