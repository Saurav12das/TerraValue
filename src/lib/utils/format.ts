/** Format a number as a percentage string */
export const toPercent = (n: number): string => `${Math.round(n)}%`;

/** Format a number as USD */
export const toUSD = (n: number): string =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

/** Format a score with /100 suffix */
export const toScore = (n: number): string => `${Math.round(n)}/100`;
