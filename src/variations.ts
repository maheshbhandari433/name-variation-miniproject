export function getNumberOfChars(input: string): number {
  return input.length;
}

export function getFirstChar(input: string): string | undefined {
  return input.charAt(0);
}

export function getLastChar(input: string): string | undefined {
  return input.charAt(input.length - 1);
}

export function getLower(input: string): string {
  return input.toLowerCase();
}

export function getUpper(input: string): string {
  return input.toUpperCase();
}
