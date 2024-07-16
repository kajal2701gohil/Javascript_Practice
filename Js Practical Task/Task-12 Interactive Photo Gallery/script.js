let img1 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-1.jpg"
let img2 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-2.jpg"
let img3 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-3.jpg"
let img4 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-4.jpg"
let img5 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-5.jpg"
let img6 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-6.jpg"
let img7 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-7.jpg"
let img8 = "https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-8.jpg"

let grpImgs = [img1, img2, img3, img4, img5, img6, img7, img8];
let box = document.getElementById('box');
let modalImg = document.getElementById("imgZoom");




let printImg = () => {
    let str = ""
    grpImgs?.map((x, i) => {
        str += `     <div class="item">
                <img src=${x} onclick=imgZoom(this)>
               <button class="del"> <i class="fa-solid fa-square-xmark" onclick=delImag(${i})></i></button>
            </div>
     `
    })
    document.querySelector(".container").innerHTML = str;
}

printImg();

let imgZoom = (a) => {
    box.style.display = "block";
    modalImg.src = a.src;
}

let closeImg = () => {
    box.style.display = "none";
}

let addImg = () => {
    let url = prompt("Please enter url");

    let isValidUrl = url.match(/\.(jpeg|jpg|gif|png)$/);
    if (isValidUrl) {
        grpImgs.push(url);
        printImg();
    }
    else {
        alert("Please enter the correct url")
    }
}

let delImag = (a) => {
    grpImgs.splice(a, 1);
    printImg();
}