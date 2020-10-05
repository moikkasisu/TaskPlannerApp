# TaskPlannerApp :high_brightness:
 Team Project of Pod1-Team4 (names withheld from public disclosure), 
 detailed instructions (tasks 6-11) are per [https://github.com/Nicktho/genxi-jwd-final-project]

# _The Setup_
Re-organise folder structure in preparation for the next few steps.

Create a js folder with index.js and taskManager.js files
Update the <script> tag in your html file to use the new location of the js/index.js file.

Create a taskManager.js file in the js folder
Add a <script> tag pointing to the js/taskManager.js file before the <script> tag pointing to the js/index.js file.

Create a TaskManager class in js/taskManager.js  it will be responsible for managing the tasks in the application.
Within the constructor of the TaskManager class, initialize a this.tasks property on the class equal to an empty array.

# 6. Adding Tasks

## Adding A New Task Programmatically

## Adding Tasks With The Form

Expected Results:
Test out your code by adding some tasks using the New Task form, and checking the TaskManager instance's tasks array for the tasks.

# 7. Display Tasks

## Using Javascript to Create the Task HTML / dislay the TaskManager's tasks array on the page.

## creating a new method on our TaskManager class called render.

## call the render
In js/index.js, in the event listener for the submit even on the New Task form, find the call to the TaskManager's addTask.
After addTask is called, call the TaskManager's render method.

Expected Results:
Go ahead and open index.html in the browser and add some tasks using the form. You should see each new task populate the task list!

# 8. Update a Task

## Adding the "Mark As Done" button

## Adding an Event Listener to the Task List

## Adding the Task id to the DOM
 
## Adding getTaskById to the TaskManager class

## Update the status of the selected Task to 'DONE'

## Hiding the "Mark As Done" Button For Completed Tasks

## Change the Styling of the Task Status.

Expected Results: 
Open up index.html and add a task. Now we should we able to click the "Mark As Done" button below each task, to change the status from "TODO" to "DONE".

# 9. Persisting Tasks to LocalStorage

## Adding the save method to TaskManager
## Adding the load method to TaskManager

Expected Results: 
Open up index.html and add a task. Now, when you re-visit the page (eg: close and open or refresh), you should see the previously created task loaded and rendered to the page!
Since the currentId is saved, any new task we create should use the next currentId, after the one stored in localStorage.

# 10. Deleting Tasks

## Add A Delete Button to the Task HTML
## Create the deleteTask Method on TaskManager
## Setting an EventListener to the Delete Button on Tasks

Expected Results: 
Open up index.html and add a task. Find the task in the Task List and click the delete button. The task should now be deleted!
Refresh the page to make sure the new list with the task deleted is saved. When you refresh the page, you should not see the deleted task in the list.

# 11. Test TaskManager class using Jasmine
## Add Jasmine to the project
## Testing TaskManager Methods
- addTask
- deleteTask
- getTaskById
## Testing TaskManager Methods 
- render
- save
- load
Hint: Make good use of Spies!

Expected results:
Open up SpecRunner.html in your browser and bask in all the green from the passed tests!
