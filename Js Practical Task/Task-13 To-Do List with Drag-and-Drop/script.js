let task = document.querySelector("#task");
let data = document.querySelector("#data");

let addTask = () => {

    let li = document.createElement("li");
    let p = document.createElement("p")
    li.draggable = true;
    p.textContent = task.value;
    li.append(p)
    data.appendChild(li);
    task.value = ""
    li.addEventListener("dragstart", dragStart1);
    li.addEventListener("dragover", dragOver1);
    li.addEventListener("dragend", dragEnd1);
}

let draggedItem;

function dragStart1() {
    draggedItem = this;
    setTimeout(() => {
        this.classList.add("dragging")
    }, 0);

}
function dragOver1() {
    if (this != draggedItem) {
        let allTask = [...data.querySelectorAll("li")]
        let draggedIndex = allTask.indexOf(draggedItem);
        let currentIndex = allTask.indexOf(this);
        if (draggedIndex > currentIndex) {
            this.before(draggedItem)
        }
        else {
            this.after(draggedItem);
        }
    }
}

function dragEnd1() {
    this.classList.remove("dragging")
    draggedItem = "";

}