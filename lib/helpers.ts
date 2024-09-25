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

  return compoundInterest;
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

  return compoundInterest;
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

  return compoundInterest;
}

export function convertMonthsToYears(months: number) {
  return months / 12.0;
}
