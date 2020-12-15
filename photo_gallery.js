"use strict";

var photoDivs = document.getElementsByClassName("imageHolder");

console.log(photoDivs[0]);

var nextButton = document.getElementById("button_next");

var previousButton = document.getElementById("button_previous");

var photoNumber = document.getElementById("stepper");

var currentPhotoNumber = 0;

photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + photoDivs.length;

nextButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");
  currentPhotoNumber = currentPhotoNumber + 1;

  if (currentPhotoNumber === photoDivs.length) {
    currentPhotoNumber = 0;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

  photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + photoDivs.length;

});

previousButton.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThisDiv");
  currentPhotoNumber = currentPhotoNumber - 1;

  if (currentPhotoNumber < 0) {
    currentPhotoNumber = photoDivs.length - 1;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThisDiv');

  photoNumber.innerHTML = (currentPhotoNumber + 1) + " out of " + photoDivs.length;

});
