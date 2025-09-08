// lib/phone.ts

/**
 * Validate Iranian mobile numbers.
 *
 * Accepted formats:
 *  - 09xxxxxxxxx
 *  - +989xxxxxxxxx
 *  - 00989xxxxxxxxx
 */
export function validateIranPhone(phone: string): boolean {
  const patterns = [
    /^09\d{9}$/,         // 09xxxxxxxxx
    /^\+989\d{9}$/,      // +989xxxxxxxxx
    /^00989\d{9}$/,      // 00989xxxxxxxxx
  ];

  return patterns.some((regex) => regex.test(phone));
}
