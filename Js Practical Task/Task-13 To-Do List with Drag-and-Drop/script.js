let task = document.querySelector("#task");
let data = document.querySelector("#data");
let items = document.querySelectorAll("li");
let saveData = () => {
    let createLi = document.createElement("li");
    createLi.innerHTML = `<p class="mb-0">${task.value}</p>`
    createLi.classList.add("item")
    // createLi.textContent = task.value;
    createLi.setAttribute("draggable", true)
    data.append(createLi);
    // task.value = ""
    // items = document.querySelectorAll("li");
    // console.log(items);

    //     <li draggable="true" class="item">
    //     <p class="mb-0">Lorem ipsum dolor sit amet.1</p>
    // </li>
}

items.forEach(x => {
    x.addEventListener("dragstart", () => {
        setTimeout(() => {
            x.classList.add("dragging")
        }, 0)
    })
    x.addEventListener("dragend", () => {
        x.classList.remove("dragging")
    })
})


// let addDragging = (a) => {
//     setTimeout(() => {
//         a.classList.add("dragging")
//     }, 0)
// }

// let removeDragging = (a) => {
//     a.classList.remove("dragging");
// }

let reOrder = (e) => {
    e.preventDefault();
    let draggingElement = document.querySelector(".dragging")
    // let siblings = [];
    // items.forEach(x => {
    //     x.classList.contains("dragging") ? "" : siblings.push(x)
    // })
    let siblings = [...data.querySelectorAll(".item:not(.dragging)")];


    let nextElement = siblings.find(x => {
        return e.clientY <= x.offsetTop + x.offsetHeight / 2;
    })
    data.insertBefore(draggingElement, nextElement);

}
data.addEventListener("dragover", reOrder);
data.addEventListener("dragenter", e => e.preventDefault());



