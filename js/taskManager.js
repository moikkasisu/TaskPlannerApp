//add an data-task-id attribute to each task

const createTaskHtml = (id, taskName, description, assignedTo, dueDate, status) =>{
    return   `
      <li class="list-group-item" data-task-id=${id}>
          <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
              <h5>${taskName}</h5>
              <span class="badge ${status === 'To Do' ? 'badge-danger' : 'badge-success'}">${status}</span>
          </div>
          <div class="d-flex w-100 mb-3 justify-content-between">
           <small>Assigned To: ${assignedTo}</small>
              <small>Due: ${dueDate}</small>
          </div>
          <p>${description}</p>
          <div class="d-flex w-100 justify-content-end">
              <button class="btn btn-outline-success done-button ${status === 'To Do' ? 'visible' : 'invisible'}">Mark As Done</button>
          </div>
      </li>
  `
  }
  
  
  console.log(createTaskHtml()); // test to see
  
  
  // function createTaskHtml (taskHtml) { return taskHtml}
  
  class TaskManager {
    // Set up the tasks and currentId=0
    constructor (currentID=0) {
        this.tasks = [];
  
        this.currentID = currentID;
  
        // this.addTask();
  
        // this.getTaskById();
    }
     // create the addTask method
   addTask(taskName, description, assignedTo, dueDate) {
        const task = {
       // Increment the currentID property
       id: this.currentID++,
       taskName: taskName,
       description: description,
       assignedTo: assignedTo,
       dueDate: dueDate,
       status: 'To Do',
       };
  
      this.tasks.push(task); // add new task into the tasks array
    };
  
  
  
     // Create the deleteTask method
     deleteTask(taskID){
      const newTasks = [];
  
      // Loop over the tasks
      for (let i = 0; i < this.tasks.length; i++) {
          // Get the current task in the loop
          const task = this.tasks[i];
  
          // Check if the task id is not the task id passed in as a parameter
          if (task.id !== taskID) {
              // Push the task to the newTasks array
              newTasks.push(task);
          }
      }
  
      // Set this.tasks to newTasks
      this.tasks = newTasks;
  }
  
  
    getTaskById (taskID){
      let foundTask;
      // Loop over the tasks and find the task with the id passed as a parameter
      for (let j = 0; j < this.tasks.length; j++) {
          // loop through the tasks in the array
          const taskitem = this.tasks[j];
          
          // when task's id matches the required ID/parameter, store the task in the a variable called foundTask
          if (taskitem.id === taskID) {
           foundTask = taskitem; 
          }
          }
       return foundTask;
     }
  
     // Create the render method
     render() {
        const tasksHtmlList = [];  // Create an array to store the tasks' HTML
       
      // Loop over our tasks and create the html, storing it in the array
      for (let i = 0; i < this.tasks.length; i++) {
          // Get the current task in the loop
          const currenttask = this.tasks[i];
         
          // Format the date
          const date = new Date(currenttask.dueDate);
          const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        
          // Create the variable: task html
         
          const taskHtml = createTaskHtml(currenttask.id, currenttask.taskName, currenttask.description, currenttask.assignedTo, formattedDate, currenttask.status);
       
          // Push it to the tasksHtmlList array
          tasksHtmlList.push(taskHtml);
  
          console.log(tasksHtmlList); //test to see
      }
  
  
      // Create the tasksHtml by joining each item in the tasksHtmlList
      // with a new line in between each item.
      const tasksHtml = tasksHtmlList.join('\n');
      console.log(tasksHtml);
  
      // Set the inner html of the tasksList on the page
      const tasksList = document.querySelector('#tasksList');
      tasksList.innerHTML = tasksHtml;
  
      console.log(tasksList);
     };
  
   // Create the save method
   save() {
      // Create a JSON string of the tasks
      const tasksJson = JSON.stringify(this.tasks);
  
      // Store the JSON string in localStorage
      localStorage.setItem('tasks', tasksJson);
  
      // Convert the currentId to a string;
      const currentID = String(this.currentID);
  
      // Store the currentId in localStorage
      localStorage.setItem('currentID', currentID);
  }
  
  // Create the load method
  load() {
      // Check if any tasks are saved in localStorage
      if (localStorage.getItem('tasks')) {
          // Get the JSON string of tasks in localStorage
          const tasksJson = localStorage.getItem('tasks');
  
          // Convert it to an array and store it in our TaskManager
          this.tasks = JSON.parse(tasksJson);
      }
  
      // Check if the currentId is saved in localStorage
      if (localStorage.getItem('currentID')) {
          // Get the currentId string in localStorage
          const currentID = localStorage.getItem('currentID');
  
          // Convert the currentId to a number and store it in our TaskManager
          this.currentID = Number(currentID);
      }
  }
  }