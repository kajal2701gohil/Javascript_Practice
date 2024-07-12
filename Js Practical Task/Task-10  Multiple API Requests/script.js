let combineApi = [];
let result = []
let obj = { title: "", email: "", completed: "" }

let url1 = "https://reqres.in/api/users?delay=3"
let url2 = "https://jsonplaceholder.typicode.com/posts/"
let url3 = "https://jsonplaceholder.typicode.com/todos"

let fetchApi = async () => {

    let promise1 = fetch(url1).then((res) => res.json())
    let promise2 = fetch(url2).then((res) => res.json())
    let promise3 = fetch(url3).then((res) => res.json())

    return await Promise.all([promise1, promise2, promise3])
}

let getData = async () => {
    await fetchApi().then((res) => {
        combineApi = res;
    }).catch((err) => console.log(err))
    for (let i = 0; i <= 5; i++) {
        obj.email = combineApi[0]["data"][i]["email"];
        obj.title = combineApi[1][i]["title"];
        obj.completed = combineApi[2][i]["completed"];
        result.push({ ...obj });
    }
    let str = ""
    result?.map(x => {
        str += `<tr>
        <td>${x.title}</td>
        <td>${x.email}</td>
        <td>${x.completed}</td>
        </tr>
        `
    })
    document.querySelector(".list").innerHTML = str;
}
getData();