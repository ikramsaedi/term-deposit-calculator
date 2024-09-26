# Term Deposit Calculator

This is a CLI term deposit calculator that takes in:

- Start deposit amount (e.g. $10,000)
- Interest rate (e.g. 1.10%)
- Investment term (e.g. 3 years)
- Interest paid (monthly, quarterly, annually, at maturity)

And outputs a final balance at the end of the investment term.

## How to run this locally

1. Clone this repository to your machine.
2. In the root of this repository, run `yarn` to install all your dependencies
3. To run the app, you can run `npx ts-node termDepositCalculator.ts` with your preferred flags. For example:

```
npx ts-node termDepositCalculator.ts --start-deposit=10000 --interest-rate=1.1   --investment-term-years=5  --interest-paid="monthly"
```

4. To run tests, run `yarn test`.

### The flags that are available

- `--start-deposit`: Mandatory flag which is used to set the principal of the term deposit
- `--interest-rate`: Mandatory flag that sets the interest rate per annum for the term deposit
- `--interest-paid`: Mandatory flag that sets how often interest is paid during the investment term. Can be one of the following options: "monthly", "quarterly", "annually", or "at maturity"
- `--investment-term-years`: This sets the duration of the term deposit investment in years.
- `--investment-term-months`: This sets the duration of the term deposit investment in months.

**Note on investment term flags**

- One of the two investment term flags must always be specified
- They can be used in combination. Eg: if you have a term deposit that has a duration of 4 years and 3 months, you can specify it as: `--investment-term-years=4 --investment-term-months=3`

## How it was built

This is a CLI app that runs using Node and Typescript.

### CLI Args Parsing

For CLI args parsing I decided to use the library `yargs`. I didn't want to have to get bogged down parsing arguments myself in Node -- there's no need to reinvent the wheel! This gave me type safety out of the box (ie: `--interest-paid` is a flag that must always be present) without much work from me.

#### Why choose CLI over UI?

I love UI! Which is a distraction. I definitely would have gotten sidetracked trying to make things pretty rather than focusing on the logic of the term deposit calculator.

Also, this was a great learning experience! I haven't made a CLI app using JS before, I've only made one with Ruby a few years ago.

### Testing

I decided to use Jest to create unit tests for my functions. I haven't worked with Jest before but since it is the standard I thought it would be easy to setup and work with. Thankfully, it was!

Since my code is relatively modularised, it makes sense to write unit tests for each function rather than trying to test the entire `termDepositCalculator.ts` file.

I also didn't think testing `termDepositCalculator.ts` was that crucial as it mainly has CLI logic, which should be largely tested by the `yargs` library. And we are under time constraints!

## How interest is calculated

I googled formulas and cross checked their outputs with the Bendigo Bank app calculator provided in the task description. Been a while since I've calculated compound interest! Resources I've used:

- [Compound interest formula](https://www.thecalculatorsite.com/finance/calculators/compound-interest-formula)
- Simple interest formula

## Business logic vs calculation logic

When calculating compound interest, the following is possible:

1. Passing in a negative interest rate so you get negatively compounded interest
2. Having very long investment terms, like 10000 years.
3. Having very large interest rates like 40%
4. Having very large start deposits like 1,000,000,000

But, as a term deposit calculator, the above doesn't make sense.

1. A negative interest rate for a term deposit is not a great investment. Banks would not offer a term deposit where your money depreciates every year.
2. Term deposits are typically short term, and certainly not longer than a human's average life span.
3. Interest rates will generally stay capped pretty low in the real world, as it isn't very profitable for banks to be paying very large interest rates to all of their customers using term deposits.

So there are two different types of validation in this program. One for calculating interest, where we ensure invalid values cannot be put in. For eg: the amount of times the interest compounds within a year must be greater than 0.

And there is also different validation logic at the app layer, which is for the business. This lives in `validateInput.ts`, and is the first thing to get run after the CLI args are parsed. It includes:

- Capping investment terms at 5 years. This seems to be what most banks do, including Bendigo Bank
- Capping interest rates at 15%, and not allowing for 0% or negative interest rates.
- Start deposit is capped at 10 million. I'm not sure if anyone with that much money would invest in 10 million into a term deposit though.

## TODO

This could definitely do with some more thorough testing! I ran out of time though.
