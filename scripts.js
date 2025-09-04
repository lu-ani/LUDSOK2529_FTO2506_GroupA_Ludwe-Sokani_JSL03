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
    //Condition to exit loop if number tasks limit is reached
  } else {
    window.alert(
      "There are enough tasks on your board, please check them in the console."
    );
    //Change the value of addTask to negative to exit loop on next iteration
    addTask = "no";
  }
}
