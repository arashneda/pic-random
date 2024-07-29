const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  num = 1;
  newImageCreate();
});

function newImageCreate() {
  for (let i = 0; i < num; i++) {
    let newImage = document.createElement("img");
    let num = Math.floor(Math.random() * 2000);
    newImage.src = `https://picsum.photos/300?random=${num}`;
    imageContainerEl.appendChild(newImage);
  }
}

// const btnEl = document.querySelector(".btn");
// const imageContainerEl = document.querySelector(".image-container");

// btnEl.addEventListener("click", () => {
//     addImage();
// });

// function addImage() {
//   newImage = document.createElement("img");
//   let x = Math.floor(Math.random()*2000)
//   newImage.src = `https://picsum.photos/300?random=${x}`;
//   imageContainerEl.appendChild(newImage);

// }
