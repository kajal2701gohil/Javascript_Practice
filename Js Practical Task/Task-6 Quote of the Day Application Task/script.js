
let list = [];
let quote = document.querySelector(".quote");
let author = document.querySelector(".author")

let getData = async () => {
    await fetch("https://type.fit/api/quotes").then((res) => {
        if (!res.ok) {
            document.querySelector(".main").textContent = "Something went wrong!! Unable to fetch the data"
            document.querySelector(".main").style.color = "red";
        }
        else {
            return res.json();
        }
    }).then(val => list = val).catch((err) => console.log(err))
}

let getQuote = async () => {
    await getData();
    let randomNumber = Math.floor(Math.random() * list.length);
    quote.textContent = list[randomNumber]["text"];
    author.textContent = "- " + list[randomNumber]["author"]
}
getQuote();


