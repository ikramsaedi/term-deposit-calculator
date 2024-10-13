import { calculateCompoundInterest } from "./calculateCompoundInterest";
import { getInvestmentTermInYears } from "./getInvestmentTermInYears";

export function printMonthlyInterest(
  startDeposit: number,
  investmentTermMonths: number,
  interestRate: number
) {
  let interestEarned = 0;
  let outputString = "";

  for (let i = 0; i < investmentTermMonths; i++) {
    // month
    // interest earned
    // balance

    // will want to reinvest the interest
    let balance = calculateCompoundInterest(
      startDeposit,
      interestRate,
      getInvestmentTermInYears(undefined, 1),
      12
    );

    interestEarned = interestEarned + balance - startDeposit;

    // I will need to recalculate the start deposit on every iteration of the loop
    // Will also have a different final balance for each iteration
    // need to track interest earned

    startDeposit = balance;
    const line = `${i + 1} ${interestEarned} ${balance}\n`;
    outputString += line;
  }

  return outputString;
}
