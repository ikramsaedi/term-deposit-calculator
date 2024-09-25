export function validateInput(
  startDeposit: number,
  interestRate: number,
  investmentTerm: number
) {
  // DOC: Assumption made
  // Assumption that nobody would want to make a deposit of 0 dollars
  if (startDeposit <= 0 || startDeposit > 10000000) {
    throw new Error(
      "Start deposit must be greater than 0 and less than or equal to 10,000,000"
    );
  }

  // DOC: assumption made
  // Assumption that nobody can have an interest rate of 0
  if (interestRate <= 0 || interestRate > 15) {
    throw new Error(
      "Interest rate must be greater than 0 and less than or equal to 15%."
    );
  }

  //  DOC: assumption made
  if (investmentTerm <= 0 || investmentTerm > 5) {
    throw new Error(
      "Investment term must be greater than 0 and less than or equal to 5 years."
    );
  }
}
