const randomNumber = Math.floor(Math.random() * 9 + 1);
console.log("\n--Number Guessing Game--\n");
import inquirer from "inquirer";
const userNumber = await inquirer.prompt([
    {
        "name": "userNumber",
        "type": "number",
        "message": "Guess a number between 1 to 9"
    }
]);
if (userNumber === randomNumber) {
    console.log("Your Number: ", userNumber, "\nComputer Number: ", randomNumber);
    console.log("Congratulations! You win");
}
else if (userNumber !== randomNumber) {
    console.log("Your Number: ", userNumber, "\nComputer Number: ", randomNumber);
    console.log("You lose!");
}
else {
    console.log("Invalid input");
}
