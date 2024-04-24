export const findMinNotInArray = (arr: number[], start = 1): number => {
  // Sort the array
  arr.sort((a, b) => a - b);

  let smallestMissing = start;

  // Iterate through the array
  for (const num of arr) {
    // If the current number is less than or equal to the smallestMissing, update smallestMissing
    if (num <= smallestMissing) {
      smallestMissing = num + 1;
    }
  }

  return smallestMissing;
};
