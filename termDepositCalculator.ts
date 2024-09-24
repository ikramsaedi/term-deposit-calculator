import yargs from "yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    "start-deposit": { type: "number", demandOption: true },
    "interest-rate": { type: "number", demandOption: true },
    "investment-term": { type: "number", demandOption: true },
    "interest-paid": {
      choices: ["monthly", "quarterly", "annually", "at maturity"],
      demandOption: true,
    },
  })
  .parseSync();
