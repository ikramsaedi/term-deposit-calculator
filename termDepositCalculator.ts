import yargs from "yargs";
import { calculateCompoundInterest } from "./calculateCompoundInterest";
// NOTE currently all investment terms are in years
// TODO support investment terms in months

const argv = yargs(process.argv.slice(2))
  .options({
    // demandOption means that this option MUST be specified
    // if it is not specified, an error will be thrown
    "start-deposit": { type: "number", demandOption: true },
    "interest-rate": { type: "number", demandOption: true },
    "investment-term": { type: "number", demandOption: true },
    "interest-paid": {
      // Only these values can be used for interest-paid. Any other
      // values will throw an error
      choices: ["monthly", "quarterly", "annually", "at maturity"],
      demandOption: true,
    },
  })
  // This prevents unknown arguments from being passed through to the CLI
  .strict()
  // Automatically configures -h / --help flag
  .help()
  // Needed to parse
  .parseSync();

switch (argv["interest-paid"]) {
  case "at maturity":
    const newTermDepositValue = calculateTermDepositAtMaturity(
      argv["start-deposit"],
      argv["interest-rate"],
      argv["investment-term"]
    );

    console.log("maturity", newTermDepositValue);
    break;
  case "monthly":
    const newTermDepositValue2 = calculateTermDepositMonthly(
      argv["start-deposit"],
      argv["interest-rate"],
      argv["investment-term"]
    );
    console.log("monthly", newTermDepositValue2);
    break;
  default:
    console.log("help! not supposed to be here!");
}
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
