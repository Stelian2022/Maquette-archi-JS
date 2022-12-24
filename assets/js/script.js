//modale d'affichage des jeans
const imgElements = document.querySelectorAll(".imgFrame img");
console.dir(imgElements);
const imgFull = [];
const frameImg = document.createElement("div");
const figcaption=document.querySelector(".imgFrame figcaption");

frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(18px)";
frameImg.style.backgroundColor = "rgba(0,0,0,0.7)";
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";
frameImg.style.position = "fixed";
frameImg.style.zIndex = 2;

document.body.prepend(frameImg);



// Meme chose avec une boucle while :
let i = 0;
while (i < imgElements.length) {
  let n = i;
  imgElements[i].addEventListener("click", () => {
    frameImg.style.display = "flex";
   
    console.log(n);
    imgFull[n] = document.createElement("img");
    imgFull[n].style.width = "40%";
    imgFull[n].src = imgElements[n].src;
    frameImg.append(imgFull[n]);
   
  });

  i++;
}

//click pour fermer la fenetre
frameImg.addEventListener("click", function (event) {
   
  console.dir(event);
  if (!frameImg.querySelector("img").contains(event.target)) {
    frameImg.style.display = "none";
    frameImg.innerHTML = "";
   

  }
});
