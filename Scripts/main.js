let addButton=document.getElementById("add-button");
let toDoContainer=document.getElementById("to-do-container")
let input =document.getElementById("input")


addButton.addEventListener("click",function(){
    const task = document.createElement("p")
    task.classList.add("task-styling")
    task.innerText=input.value
    
    toDoContainer.appendChild(task)
    input.value=""
    task.addEventListener("dblclick",function(){
        toDoContainer.removeChild(task)
    })


})