import yargs from "yargs";
import {
  calculateTermDepositAnnually,
  calculateTermDepositAtMaturity,
  calculateTermDepositMonthly,
  calculateTermDepositQuarterly,
} from "./lib/helpers";
import { validateInput } from "./lib/validateInput";
import { getInvestmentTermInYears } from "./lib/getInvestmentTermInYears";

const argv = yargs(process.argv.slice(2))
  .options({
    // demandOption means that this option MUST be specified
    // if it is not specified, an error will be thrown
    "start-deposit": { type: "number", demandOption: true },
    "interest-rate": { type: "number", demandOption: true },
    "investment-term-months": { type: "number" },
    "investment-term-years": { type: "number" },
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

validateInput(
  argv["start-deposit"],
  argv["interest-rate"],
  argv["investment-term-years"],
  argv["investment-term-months"]
);

const investmentTerm = getInvestmentTermInYears(
  argv["investment-term-years"],
  argv["investment-term-months"]
);

let finalBalance: number | undefined;
switch (argv["interest-paid"]) {
  case "at maturity":
    finalBalance = calculateTermDepositAtMaturity(
      argv["start-deposit"],
      argv["interest-rate"],
      investmentTerm
    );

    break;
  case "annually":
    finalBalance = calculateTermDepositAnnually(
      argv["start-deposit"],
      argv["interest-rate"],
      investmentTerm
    );
    break;
  case "quarterly":
    finalBalance = calculateTermDepositQuarterly(
      argv["start-deposit"],
      argv["interest-rate"],
      investmentTerm
    );
    break;
  case "monthly":
    finalBalance = calculateTermDepositMonthly(
      argv["start-deposit"],
      argv["interest-rate"],
      investmentTerm
    );
    break;
  default:
    throw new Error(
      "Something has gone wrong and we have not been able to calculate your final balance."
    );
}

console.log(`Your final balance is $${finalBalance.toFixed(2)}`);
