

// Created From https://github.com/pim97/Vue3-Tailwind-Flowbite-Starter-Kit.git

// Function to check if the puzzle is solved
function isPuzzleSolved(puzzle) {
  const solution = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The correct solution for the puzzle

  // Check if the puzzle matches the solution
  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i] !== solution[i]) {
      return false;
    }
  }

  return true;
}

// Sample puzzle to solve
const puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Check if the puzzle is solved and display the result
if (isPuzzleSolved(puzzle)) {
  console.log("Congratulations! The puzzle is solved.");
} else {
  console.log("Oops! The puzzle is not yet solved.");
}
