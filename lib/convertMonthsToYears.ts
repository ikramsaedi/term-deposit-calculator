/**
 * Simple helper function used to convert an investment term specified in months to years.
 *
 * This just allows us to standardise the investment term so we don't have to have separate logic
 * for months vs years.
 */
export function convertMonthsToYears(months: number) {
  return months / 12.0;
}
