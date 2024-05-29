#! /usr/bin/env node

import inquirer from "inquirer";

let todos = []; //consider as a shopper.
let condition = true                                          ; 

while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      message: "What would you like to add in your todos?",
      type: "input",
    },
    {
      name: "secondQuestion",
      message: "Would you to like to add more in your todos?",
      type: "confirm",  //when type is confirm its mean that answer is in yes or no. 
      default: "true",
    },
  ]);

  todos.push(todoQuestions.firstQuestion);
  console.log(todos);
  //the loop is running on the basis of this variable condition.
  condition = todoQuestions.secondQuestion;
}


//read,update,delete.
//jo empty hai usko kese hathana hai. 