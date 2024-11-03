export class stringCalculator {
  static add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*\]|\S)\n/);

      if (delimiterMatch) {
        const delimiterString = delimiterMatch[1];

        if (delimiterString.startsWith("[")) {
          const delimiters = delimiterString
            .slice(1, -1)
            .split("][")
            .map((delim) => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"));

          delimiter = new RegExp(delimiters.join("|"));
        } else {
          delimiter = new RegExp(`[${delimiterString}]`);
        }

        numbers = numbers.slice(numbers.indexOf("\n") + 1);
      }
    }

    const nums = numbers.split(delimiter).map(Number);

    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}
