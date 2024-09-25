import yargs from "yargs";
import {
  calculateTermDepositAnnually,
  calculateTermDepositAtMaturity,
  calculateTermDepositMonthly,
  calculateTermDepositQuarterly,
} from "./helpers";
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
  case "annually":
    const newTermDepositValue4 = calculateTermDepositAnnually(
      argv["start-deposit"],
      argv["interest-rate"],
      argv["investment-term"]
    );
    console.log("annually", newTermDepositValue4);
    break;
  case "quarterly":
    const newTermDepositValue3 = calculateTermDepositQuarterly(
      argv["start-deposit"],
      argv["interest-rate"],
      argv["investment-term"]
    );
    console.log("quarterly", newTermDepositValue3);
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
