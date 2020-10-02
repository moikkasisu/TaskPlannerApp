// initialize a new TaskManager with currentId set to 0
const TaskMgr = new TaskManager();
// load tasks to page
TaskMgr.load();
// render tasks to page
TaskMgr.render();
//* Date of Entry as Start Date *
const date= document.querySelector('#modallastsaved');
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
date.value= new Date().toLocaleDateString('en-AU', options)

//Task Due date input
const taskDueDate = document.querySelector('#modaltaskDuedate');
taskDueDate.min = new Date().toISOString().split("T")[0];

function myFunction() {
let x = document.createElement("input");
x.setAttribute("type", "date");
// x.setAttribute("value", taskDueDate);
document.body.appendChild(x);
}

// inputs
const taskname = document.querySelector('#modaltaskname');
const taskDescr = document.querySelector('#modaltaskDescr');
const taskAssignedTo = document.querySelector('#modaltaskAssignedTo');
const emailAssignee = document.querySelector('#modalemailAssignee')
const taskStatus = document.querySelector('#modalstatus')
const taskCategory = document.querySelector('#modalcategory')

  

 // create a checkForm function to validate fields in the form
    let checkForm = function(e) {
      let taskform = e.target;
       if (taskform.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }; 
  //Taskname should be empty and longer than 8 characters
  if (taskname.value.trim().length >= 8) {
    taskname.classList.add("is-valid");
    taskname.classList.remove("is-invalid");

  } else {
    taskname.classList.add("is-invalid");
    taskname.classList.remove("is-valid");
  };

  // description should not be empty and longer than 15 characters
    if (taskDescr.value.trim().length >= 15) {
      taskDescr.classList.add("is-valid");
      taskDescr.classList.remove("is-invalid");
     
    } else {
      taskDescr.classList.add("is-invalid");
      taskDescr.classList.remove("is-valid");
    };


    // taskDueDate: calendar preset to choose from/after today's date, if nothing is choosen, show error messgae     

      let today = new Date().setUTCHours(0,0,0,0)
      let pickedDate = new Date (taskDueDate.value).setUTCHours(0,0,0,0)
         if (pickedDate >= today) {
        taskDueDate.classList.add("is-valid");
        taskDueDate.classList.remove("is-invalid");
          }
          else
          {      
        taskDueDate.classList.add("is-invalid");
        taskDueDate.classList.remove("is-valid");
          }                
  

   // assigned to should not be empty and longer than 8 characters
  if (taskAssignedTo.value.length >= 8) {
    taskAssignedTo.classList.add("is-valid");
    taskAssignedTo.classList.remove("is-invalid");
    
  } else {
    taskAssignedTo.classList.add("is-invalid");
    taskAssignedTo.classList.remove("is-valid");
  };


//  email address is optional, but if not empty, needs to be valid
// const emailAssignee = document.querySelector('#modalemailAssignee')
const emailAddress = emailAssignee.value;
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// const pattern = /^[^]+@[^]+\.[A-Z]{2,3}$/;
// if (emailAddress.trim() !== "" && emailAddress.match(pattern)) 
if (emailAddress.match(pattern)) {
    emailAssignee.classList.add("is-valid");
    emailAssignee.classList.remove("is-invalid");
   }
   else if(emailAddress.trim() =="") {
    emailAssignee.classList.remove("is-valid");
    emailAssignee.classList.remove("is-invalid");
   }
   else
   {
   emailAssignee.classList.remove("is-valid");
   emailAssignee.classList.add("is-invalid");
    }       
  }
  
document.querySelector("#modalnewTaskForm").addEventListener("keyup", checkForm); 

console.warn(`added new task, Id: ${TaskMgr.currentId}`);

const form1= document.querySelector('#modalnewTaskForm');
form1.addEventListener('submit', (e)=>{
  // prevent default action firing
  e.preventDefault();
  let taskName = taskname.value;
  let description = taskDescr.value;
  let assignedTo = taskAssignedTo.value;
  let dueDate = taskDueDate.value;
  let emailAddress = emailAssignee.value;
  let status= taskStatus.value;
  let category = taskCategory.value
    
     // add entered task form data to taskmanager
   TaskMgr.addTask(taskName, description, assignedTo, dueDate);
   console.log(TaskMgr);
   // save the task to localStorage
  TaskMgr.save();
  // Render the tasks
  TaskMgr.render();
 
 
 // The Code below clears the form and localstorage 
// document.querySelectorAll('input').reset();
// window.localStorage.clear();

  taskname.value = '';
  taskDueDate.value = '';
  taskDescr.value = '';
  taskAssignedTo.value = '';
  emailAssignee.value = '';
  taskStatus.value = '';
  taskCategory.value = '';

   // close the modal by toggling
   $("#addTaskModal").modal("toggle");
  //  $('.collapse').collapse("toggle");
});

// // Select the Tasks List
const tasksList = document.querySelector('#tasksList');
  
// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener("click", (e) => {
  // Check if a "Mark As Done" button was clicked
  if (e.target.classList.contains("done-button")) {
    // Get the parent Task
    const parentTask = e.target.parentElement.parentElement;
    // Get the taskId of the parent Task.
    const taskId = Number(parentTask.dataset.taskId);
    // Get the task from the TaskManager using the taskId
    const task = TaskMgr.getTaskById(taskId);
   // Update the task status to 'DONE'
    task.status = "DONE";
    console.log(task.status);
      // save the task to localStorage
  TaskMgr.save();
  // render tasks
  TaskMgr.render();
  };

// check if "Delete" button was clicked
if (e.target.classList.contains("delete-button")) {
  // get parent task
  const parentTask = e.target.parentElement.parentElement;
  // get taskId of parent task
  const taskId = Number(parentTask.dataset.taskId);
  // delete the task
  TaskMgr.deleteTask(taskId);
  // save the task to localStorage
  TaskMgr.save();
  // render tasks
  TaskMgr.render();
}
});


//ACCORDIAN FUNCTIONS - Commented out ATM
 // let acc = document.querySelector(".accordian");
  //let i;

  //for (i = 0; < acc.length; i++) {
    //acc[i].addEventListener('click', function() {
      //this.classList.toggle("active");
      //let panel = this.nextElementSibling;
      //if (panel.style.display === 'block'){
        //panel.style.display = "none";
      //} else panel.style.display = "block";
    //});
  //}