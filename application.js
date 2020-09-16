getTasks();
document.querySelector('.add-task').addEventListener('click',saveTask);

function saveTask(e){
    let title=document.getElementById('task').value;
    let selected=document.getElementById('priority');
    let priority=selected.options[selected.selectedIndex].value;
    console.log(typeof(title))
    if(title !== "" ){
        let task={
            title,priority
        }
        console.log(task)
    
        if(localStorage.getItem('task-list')===null){
            let taskList=[];
            taskList.push(task);
            localStorage.setItem('task-list',JSON.stringify(taskList));
        }else{
            let taskList=JSON.parse(localStorage.getItem('task-list'));
            taskList.push(task);
            localStorage.setItem('task-list',JSON.stringify(taskList));
        }
        
        document.getElementById('create-task').reset();
        e.preventDefault();
        getTasks();
    }
}

function deleteTask(title,priority){
    let tasks = JSON.parse(localStorage.getItem('task-list'));
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].title==title && tasks[i].priority==priority){
            tasks.splice(i,1);
        }
    }
    localStorage.setItem('task-list',JSON.stringify(tasks));
    getTasks();
}

function getTasks(){
    let tasks=JSON.parse(localStorage.getItem('task-list'));
    let taskList= document.getElementById('task-list');

    taskList.innerHTML='';

    console.log(tasks)

    for(let i=0 ; i<tasks.length ; i++){
        let title=tasks[i].title;
        let priority = tasks[i].priority;

        console.log(title)
        console.log(priority)

        taskList.innerHTML +=`
        <div class="task-list">
            <div class="card-list">
                <div class="card">
                    <div class="show-task">
                        <p>${title}</p>
                    </div>
                    <div class="show-task priority">
                        <p>${priority}</p>
                    </div>
                    <div class="delete-btn">
                        <p><a href="#" onclick="deleteTask('${title}','${priority}')">Delete</a></p>
                    </div>

                </div>
            </div>
        </div>`;

    }
}
