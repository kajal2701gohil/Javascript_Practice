let task = document.querySelector("#task");
let data = document.querySelector("#data");
let editText = "";
let liAll = document.querySelectorAll("li");
let list = [];


let saveData = () => {
    if (editText) {
        let index = list.findIndex(x => x == editText.trim());
        editText = "";
        data.children[index].innerHTML = `
        <input type="checkbox" onchange="doneTask(this)" class="check">${task.value}
        <div class="position-absolute box">
        <button class="btn1"
        type="button" onclick="editData(this)"> <i
        class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn3" type="button" onclick="delTask(this)"><i
        class="fa-solid fa-trash"></i></button>
        </div>
      `;

    }
    else {

        let li = document.createElement("li");
        li.classList.add("position-relative");
        li.innerHTML = `
        <input type="checkbox" onchange="doneTask(this)" class="check">${task.value}
        <div class="position-absolute box">
        <button class="btn1"
        type="button" onclick="editData(this)"> <i
        class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn3" type="button" onclick="delTask(this)"><i
        class="fa-solid fa-trash"></i></button>
        </div>
      `
        data.append(li);
        list.push(task.value);
    }
    task.value = "";


}
let delTask = (b) => {
    b.closest("li").remove();
    list = list.filter(x => x != b.closest("li").textContent.trim());
}
let doneTask = (a) => {
    if (a.checked == true) {
        a.parentElement.style = "text-decoration: line-through";
    }
    else {
        a.parentElement.style = "text-decoration: none";
    }
}
let editData = (c) => {
    task.value = c.closest("li").textContent;
    editText = c.closest("li").textContent;
}
