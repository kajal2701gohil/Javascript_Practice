let task = document.querySelector("#task");
let data = document.querySelector("#data");
let editText = "";
let liAll = document.querySelectorAll("li");
let list = [];
let checkTask = [];
let saveData = () => {
    let k = task.value;
    if (editText) {
        let index = list.findIndex(x => x == editText);
        list.splice(index, 1, k);
        editText = "";
    }
    else {

        list.push(k)
    }
    task.value = "";
    printTask();
}
let printTask = () => {

    let str = "";
    list?.map((x, i) => {
        str += `
    <li class="position-relative  ${(checkTask.includes(x)) ? "text-decoration-line-through" : ""}"><input type="checkbox" onchange="doneTask(this, ${i})" name=${i} class="check" ${(checkTask.includes(x)) ? "checked" : ""}>${x}
    <div class="position-absolute box">
    <button class="btn1"
    type="button" onclick="editData(${i})"> <i
    class="fa-solid fa-pen-to-square"></i></button>
    <button class="btn3" type="button" onclick="delTask(${i})">
    <i 
    class="fa-solid fa-trash"></i></button>
    </div>
    </li>`
    })
    data.innerHTML = str;
}
let delTask = (b) => {
    list.splice(b, 1);
    printTask();
}
let doneTask = (a, k) => {
    if (a.checked == true) {
        a.parentElement.style = "text-decoration: line-through";
        checkTask.push(list[k])
    } else {
        a.parentElement.style = "text-decoration: none";
        checkTask = checkTask.filter(x => x != list[k]);
    }
}
let editData = (c) => {
    editText = task.value = list[c];
}