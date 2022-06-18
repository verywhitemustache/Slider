var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var numberOfPhotos = document.getElementsByClassName("photoContaier");

var counter = 0;
var maxPhotos = "/" + numberOfPhotos.length;

var text = document.getElementById("listCounter");
text.innerHTML = counter + 1 + maxPhotos;

leftButton.onclick = function () {
  numberOfPhotos[counter].classList.remove("active");
  if (counter >= numberOfPhotos.length - 1) {
    counter = 0;
    text.innerHTML = counter + 1 + maxPhotos;
  } else {
    counter++;
    text.innerHTML = counter + 1 + maxPhotos;
  }
  numberOfPhotos[counter].classList.add("active");
};

rightButton.onclick = function () {
  numberOfPhotos[counter].classList.remove("active");
  if (counter <= 0) {
    counter = numberOfPhotos.length - 1;
    text.innerHTML = counter + 1 + maxPhotos;
  } else {
    counter--;
    text.innerHTML = counter + 1 + maxPhotos;
  }
  numberOfPhotos[counter].classList.add("active");
};
