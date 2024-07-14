let textArea = document.querySelector("#textArea");

let getData = (e) => {
    let array = e.value.toLowerCase();
    let specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    array = array.split(" ").filter(x => x && !specialCharactersRegex.test(x))
    document.querySelector("#count").textContent = array.length;
    let average = array.reduce((x, y) => x + y.length, 0);
    let averageWords = average / array.length;
    document.querySelector("#average").textContent = averageWords ? Math.floor(averageWords) : 0;

    let uniqueValues = new Set();
    let duplicateValues = new Set();


    array.forEach(value => {
        if (uniqueValues.has(value)) {
            duplicateValues.add(value);
        } else {
            uniqueValues.add(value);
        }
    });


    let commonWords = (Array.from(duplicateValues)).toString(",");

    document.querySelector("#common").textContent = commonWords;

}