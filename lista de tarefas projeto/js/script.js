function addTask() {

    //titulo da tarefa
    const taskTitle = document.querySelector("#add-btn").value;


    if(taskTitle) {
        //clona template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);

        //adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remove as classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //remover tarefa
        function removeTask(task) {
            task.parentNode.remove(true);
        }

        //completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        // function de completar tarefa
        function completeTask(task) {
           const taskToComplete = task.parentNode;
           taskToComplete.classList.toggle("done");
        }
        

        //adiciona tarefa na lista
        const list = document.querySelector("#list");
        list.appendChild(newTask);

        //limpar texto
        document.querySelector("#add-btn").value = "";

        //adicionar o evento de remover
      /* const deleteBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        }); */

        const deleteBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });
      

    }


}

const addBtn = document.querySelector("#add-btn-hover");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    
    addTask();
});

