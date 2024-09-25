This is a term deposit calculator that takes in:

- Start deposit amount (e.g. $10,000)
- Interest rate (e.g. 1.10%)
- Investment term (e.g. 3 years)
- Interest paid (monthly, quarterly, annually, at maturity)

And outputs a final balance at the end of the investment term.

# How to run

1. Clone this repository to your machine.
2. In the root of this repository, run `yarn`
3. To run the app, run `npx ts-node termDepositCalculator.ts --start-deposit=10000 --interest-rate=1.1   --investment-term-years=5  --interest-paid="monthly"`
4. To run tests, run `yarn test`.

# How it was built
