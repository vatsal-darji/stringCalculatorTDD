export class stringCalculator {
  static add(numbers: string): number {
    if (!numbers) return 0;

    const nums = numbers.split(",").map(Number);
    return nums.reduce((sum, n) => sum + n, 0);
  }
}
