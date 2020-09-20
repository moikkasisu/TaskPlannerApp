// validation of Modal Form

//modaltaskDuedate
const modalfield = document.querySelector('#modaltaskDuedate');
modalfield.min = new Date().toISOString().split("T")[0];

function modalFunction() {
const xx = document.createElement("input");
xx.setAttribute("type", "date");
xx.setAttribute("value", modalfield);
document.body.appendChild(xx);
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var modalforms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var modalvalidation = Array.prototype.filter.call(modalforms, function(formNew) {
      formNew.addEventListener('submit', function(ev) {
        if (formNew.checkValidity() === false) {
          ev.preventDefault();
          ev.stopPropagation();
        }
        formNew.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


//Task ID 1 - 1000:
let idNum= document.querySelector("#taskid");
idNum.setAttribute("value", "0");
let i = idNum;
function func() {
(i>0 && i<1000)? i++: alert("No more than 1000!")}


//* Date of Entry as Start Date *
const date= document.querySelector('#lastsaved');
const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
date.value= new Date().toLocaleDateString('en-AU', options)

//taskDuedate
const field = document.querySelector('#taskDuedate');
field.min = new Date().toISOString().split("T")[0];

function myFunction() {
const x = document.createElement("input");
x.setAttribute("type", "date");
x.setAttribute("value", field);
document.body.appendChild(x);
}

//***Below following Bootstrap Form Validation Example for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



//initialize a new instance Initialize a new instance of TaskManager
let TaskMgr = new TaskManager (0);
 
const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (newevent) => {
  newevent.preventDefault();

while (formSubmit.checkValidity() === true) {
  // inputs
const taskname = document.querySelector('#taskname');
const taskDueDate = document.querySelector('#taskDuedate');
const taskDescr = document.querySelector('#taskDescr');
const taskAssignedTo = document.querySelector('#taskAssignedTo');
const emailAssignee = document.querySelector('#emailAssignee')


const taskName = taskname.value;
const description = taskDescr.value;
const assignedTo = taskAssignedTo.value;
const dueDate = taskDueDate.value;
const emailAddress = emailAssignee.value;

TaskMgr.addTask(taskName, description, assignedTo, dueDate, emailAddress);

TaskMgr.render();

// The Code below clears the form
taskname.value = '';
taskDueDate.value = '';
taskDescr.value = '';
taskAssignedTo.value = '';
emailAssignee.value = '';
}
});

// Select the Tasks List
const tasksList = document.querySelector('#tasksList');

// Add an 'onclick' event listener to the Tasks List
tasksList.addEventListener('click', (event) => {
    // Check if a "Mark As Done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;

        // Get the taskId of the parent Task.
        const taskID = Number(parentTask.dataset.taskID);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskID);

        // Update the task status to 'DONE'
        task.status = 'DONE';

        // Render the tasks
        TaskMgr.render();
    }
});