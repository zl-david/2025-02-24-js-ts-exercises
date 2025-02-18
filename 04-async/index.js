import { createInterface } from "readline";

/**
 * Helper function to prompt the user for input.
 * @param {string} query - The question to ask the user.
 * @returns {Promise<string>} - A promise that resolves with the user's answer.
 */
function askQuestion(query) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}

/*
 * 1. Ask the user for a post ID between 1 and 100 (use the askQuestion() helper function)
 * 2. Fetch the post and show it to the user (https://jsonplaceholder.typicode.com/posts/:postId)
 * 3. On succesful response, ask the user if comments should be loaded
 * 4. If yes, load comments at https://jsonplaceholder.typicode.com/posts/:postId/comments
 * 5. Gracefully handle errors
 */
async function main() {
  const idInput = await askQuestion("Give a post ID (1-100): ");
  const postId = parseInt(idInput, 10);

  if (isNaN(postId) || postId < 1 || postId > 100) {
    console.log("Incorrect ID. Enter a number between 1 and 100.");
    return;
  }
}

main();
