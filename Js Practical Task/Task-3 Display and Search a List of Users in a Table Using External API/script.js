let data = [];
let list = document.querySelector(".list");
let getData = async () => {
    let arr = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await arr.json();
    printData(data);
}
getData();

let printData = async (data1) => {
    let str = "";
    data1?.map((x) => {
        str += `
        <tr>
            <td>${x.name}</td>
            <td>${x.email}</td>
            <td>${x.address.suite + ", " + x.address.street + ", " + x.address.city + ", " + x.address.zipcode + "."}</td>
            </tr>`
    })
    list.innerHTML = str;
}

let searchData = async () => {
    let name = document.querySelector("#input");
    let arr = await fetch("https://jsonplaceholder.typicode.com/users")
    let data = await arr.json();
    data = data.filter(x => x.name.toLowerCase().includes(name.value.toLowerCase()))
    printData(data);
}