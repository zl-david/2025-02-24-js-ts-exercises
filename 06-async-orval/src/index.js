import {
  findPetsByStatus,
  getPetById,
  addPet,
  updatePet,
  deletePet,
} from "./data-access/petstore";
import readline from "readline";

const petstoreService = {
  async listPets() {
    // Prompt the user for the pet status.
    let status = await askQuestion(
      "Enter pet status (available, pending, sold): "
    );
    status = status.trim().toLowerCase();

    // Validate the status input.
    if (!["available", "pending", "sold"].includes(status)) {
      console.log(
        "Invalid status provided. Please enter 'available', 'pending', or 'sold'."
      );
      return;
    }

    const result = await findPetsByStatus({ status });
    console.log(result);
  },

  async getPetDetails() {
    throw new Error("Not impelemented");
  },

  async addNewPet() {
    throw new Error("Not impelemented");
  },

  async updatePet() {
    throw new Error("Not impelemented");
  },

  async deletePet() {
    throw new Error("Not impelemented");
  },
};

/**
 * Helper function to prompt the user for input.
 * @param {string} query - The question to ask the user.
 * @returns {Promise<string>} - A promise that resolves with the user's answer.
 */
function askQuestion(query) {
  const rl = readline.createInterface({
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

function mainMenu() {
  console.log("\n=== Petstore CLI Manager ===");
  console.log("1. List Pets by Status");
  console.log("2. Get Pet Details");
  console.log("3. Add a New Pet");
  console.log("4. Update an Existing Pet");
  console.log("5. Delete a Pet");
  console.log("6. Exit");
  promptUser();
}

async function promptUser() {
  const answer = await askQuestion("Select an option (1-6): ");

  switch (answer.trim()) {
    case "1":
      await petstoreService.listPets();
      break;
    case "2":
      await petstoreService.getPetDetails();
      break;
    case "3":
      await petstoreService.addNewPet();
      break;
    case "4":
      await petstoreService.updatePet();
      break;
    case "5":
      await petstoreService.deletePet();
      break;
    case "6":
      console.log("Goodbye!");
      return;
    default:
      console.log("Invalid option. Please try again.");
  }

  mainMenu(); // Loop back to the main menu after each operation
}

mainMenu();
