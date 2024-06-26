let array = [];
let dec = document.querySelector(".input");
let list = document.querySelector("#list");
let count = 0;
let editIndex;
let getData = () => {
    let obj = {};
    obj.dec = dec?.value;
    obj.status = document.querySelector(["input[name=status]:checked"])?.value;
    if (editIndex >= 0) {
        obj.id = array[editIndex].id;
        array.splice(editIndex, 1, obj);
        editIndex = 0;
    }
    else {
        count += 1;
        obj.id = count;
        array.push({ ...obj });
    }
    print(array);
    document.querySelector(".form").reset();
    console.log(array);
}

let print = (array) => {
    let str = "";
    array?.map((y, i) => {
        str += `<tr>
    <td>${y.id}</td>
    <td>${y.dec}</td>
    <td>${y.status}</td>
    <td>
        <button class="btn btn-warning" onclick="delData(${i})">del</button>
        <button class="btn btn-primary" onclick="editdata(${i})">edit</button>
    </td>
</tr>`

    })
    list.innerHTML = str;
}

let delData = (i) => {
    array.splice(i, 1);
    print(array);
};

let editdata = (a) => {
    dec.value = array[a].dec;
    ((array[a].status == undefined) ? (document.querySelector([`input[name=status][value=complete ]`]).checked = true) : (document.querySelector([`input[name=status][value=${array[a].status}]`]).checked = true));
    editIndex = a;
    console.log(a);
}

let completeTask = () => {
    let ab = array.filter(x => x.status == "complete");
    print(ab);
}
let incompleteTask = () => {
    let cd = array.filter(x => x.status == "incomplete");
    print(cd);
}
let allTask = () => {
    print(array);
    console.log(array);
}