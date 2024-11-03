export class stringCalculator {
  static add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/; // Default delimiters: comma or newline

    // Check for custom delimiter syntax at the start of the string
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*\]|\S)\n/);

      if (delimiterMatch) {
        // Multi-character or single-character custom delimiters
        const delimiterString = delimiterMatch[1];

        if (delimiterString.startsWith("[")) {
          // Multiple delimiters in the format //[delim1][delim2]...
          const delimiters = delimiterString
            .slice(1, -1) // Remove the outer brackets
            .split("][") // Split by '][' to get each delimiter
            .map((delim) => delim.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")); // Escape special regex characters

          delimiter = new RegExp(delimiters.join("|")); // Create regex pattern for multiple delimiters
        } else {
          // Single character delimiter
          delimiter = new RegExp(`[${delimiterString}]`);
        }

        // Remove the custom delimiter declaration line
        numbers = numbers.slice(numbers.indexOf("\n") + 1);
      }
    }

    // Convert split numbers to integers, and ignore numbers greater than 1000
    const nums = numbers.split(delimiter).map(Number);

    // Check for negatives and throw an error if any found
    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    // Sum the numbers, ignoring values > 1000
    return nums.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}
