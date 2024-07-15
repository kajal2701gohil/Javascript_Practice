let playList = [
    {
        name: "Cosmic Meadow",
        path: "Playlist/1.mp3",

    },
    {
        name: "Four Dimensions",
        path: "Playlist/2.mp3",

    },
    {
        name: "Indian Summer",
        path: "Playlist/3.mp3",

    },
    {
        name: "Lift the So High",
        path: "Playlist/4.mp3",

    },
    {
        name: "The Otherside",
        path: "Playlist/5.mp3",

    },
]

let audio = document.querySelector("#audio");
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")
let play1 = document.querySelector("#play")
let data = document.querySelector("#data");

let currant = 0;


let printPlayList = () => {
    let str = "";
    playList?.map((x, i) => {
        str += `<li>${x.name}<button onclick = delSong(${i})>del</button></li>`
    })
    data.innerHTML = str;
}

printPlayList();
let playSong = () => {

    audio.src = playList[currant].path;
    document.querySelector("#playing").textContent = playList[currant].name
    audio.play();
    play1.classList.replace("fa-play", "fa-pause")
}
playSong();

play1.addEventListener("click", () => {
    console.log(audio.paused);
    if (audio.paused) {
        audio.play();
        play1.classList.replace("fa-play", "fa-pause")
    }
    else {
        audio.pause();
        play1.classList.replace("fa-pause", "fa-play")
    }
})

prev.addEventListener("click", () => {
    currant--;
    if (currant < 0) {
        currant = playList.length - 1
    }
    playSong();
})

next.addEventListener("click", () => {
    currant++;
    if (currant > playList.length - 1) {
        currant = 0;
    }
    playSong();
})

let addSong = () => {
    let obj = {};
    let name = prompt("Please enter the name of the song");
    let song = document.querySelector("#newSong").value;
    console.log(name, song);
    obj.name = name;
    obj.path = song;
    playList = [...playList, obj]
    document.querySelector("#newSong").value = ""
    printPlayList();
}

let delSong = (a) => {
    playList.splice(a, 1);
    printPlayList();
}

let shuffle = () => {
    playList = playList?.sort(x => {

        console.log(x, Math.random(), Math.random() * 10 - 0.8);
        return Math.random() - 0.5
    })
    printPlayList();
}