import inquirer from "inquirer";

let todos = [];
let condition = true;

while(condition){
  let todoQuestions = await inquirer.prompt([
    {
    name: "firstQuestion",
    message: "What would you like to add in your todos?",
    type: "input"
    },
    {
    name: "secondQuestion",
    message: "Would you to like to add more in your todos?",
    type: "confirm",
    default: "true"
    }
    ]);

todos.push(todoQuestions.firstQuestion);
console.log(todos);
condition = todoQuestions.secondQuestion

}