let addButton = document.querySelector(".task-add");
let getInputs = document.getElementById("inputs");
let taskContainer = document.querySelector(".task-container");

function createTask() {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    let taskText = getInputs.value;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.textContent = taskText;

        checkbox.addEventListener("change", function () {
        if (this.checked) {
            label.style.textDecoration = "line-through";
            label.style.color = "gray";
        } else {
            label.style.textDecoration = "none";
            label.style.color = "black";
        }
    });

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");
    removeBtn.textContent = "X";

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(removeBtn);

    taskContainer.appendChild(taskDiv);

    getInputs.value = "";
}

addButton.addEventListener("click", function () {
    let inputText = getInputs.value.trim(); 
    if (inputText === '') {
        alert("Input text first");
    } else {
        createTask();
    }
});

taskContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
        let taskDiv = event.target.parentElement;
        taskDiv.remove();
    }
});

getInputs.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
                let inputText = getInputs.value.trim();
                if(inputText=== ''){
                        alert("Input text first");
                } else {
                        createTask();
                }
        }
});


