const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

//Add the existing objects to the new array name
const tasks = initialTasks;

//Initialise the while loop on a positive so it runs at least once
let addTask = "yes";

//While loop to run whenever a user wants to add a task and exits when the user doesn't want to add one
while (addTask === "yes") {
  //Condition so that the user cannot add more than 6 tasks
  if (tasks.length < 6) {
    addTask = prompt(
      "Would you like to add a new task?: YES / NO "
    ).toLowerCase();
    //Condition to ensure the status is one of the accepted values
    while (addTask !== "yes" && addTask !== "no") {
      window.alert("Unclear. Only input yes or no.");
      addTask = prompt(
        "Would you like to add a new task?: YES / NO "
      ).toLowerCase();
    }
    //Another if statement that runs when both prior conditions are met
    if (addTask === "yes" && tasks.length < 6) {
      //Initialise the new task object
      newTask = {};
      //Set the new id number to be 1 more than the previous on the list
      newTask.id = tasks.length + 1;
      newTask.title = prompt("Enter the Task title: ");
      newTask.description = prompt("Enter the Task description: ");
      newTask.status = prompt("Enter the Task status");
      //Condition to ensure the status is one of the accepted values
      while (
        newTask.status !== "todo" &&
        newTask.status !== "doing" &&
        newTask.status !== "done"
      ) {
        window.alert("Tasks can only be todo, doing or done!");
        newTask.status = prompt(
          "Enter the Task Status: (todo, doing or done)"
        ).toLowerCase();
      }
      //Add the new task object to the existing array
      tasks.push(newTask);
      window.alert("New Task Added!");
      //Condition to exit loop if user does not want to add a new abject
    } else if ((addTask = "no")) {
      window.alert("Okay. No new Tasks.");
    }
    //Condition to exit loop if number tasks limit is reached
  } else {
    window.alert(
      "There are enough tasks on your board, please check them in the console."
    );
    //Change the value of addTask to negative to exit loop on next iteration
    addTask = "no";
  }
}

//Return all tasks
console.log("All Tasks: ", tasks);

//Initialize completed task array
completedTasks = [];

