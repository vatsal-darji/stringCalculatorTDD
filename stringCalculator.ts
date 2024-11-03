export class stringCalculator {
  static add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const match = numbers.match(/^\/\/(.+)\n/);
      delimiter = new RegExp(`[${match![1]}]`);
      numbers = numbers.slice(match![0].length);
    }

    const nums = numbers.split(delimiter).map(Number);
    return nums.reduce((sum, n) => sum + n, 0);
  }
}
