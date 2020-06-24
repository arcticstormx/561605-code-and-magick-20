(function() {
  'use strict';
var setup = document.querySelector(".setup");
var setupOpen = document.querySelector(".setup-open");
var setupClose = setup.querySelector(".setup-close");

var onPopupEscPress = function(evt) {
  if (evt.keyCode === 27) {
    setup.classList.remove("hidden");
    evt.preventDefault();
    popupClose();
  }
};

var popupOpen = function() {
  setup.classList.remove("hidden");
  document.addEventListener('keydown', onPopupEscPress);
};

var popupClose = function() {
  setup.classList.add("hidden");
  document.removeEventListener('keydown', onPopupEscPress);
};


setupOpen.addEventListener("click", function(evt) {
  popupOpen();
});

setupOpen.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove("hidden");
  }
});

setupClose.addEventListener("click", function(evt) {
  popupClose();
});

setupClose.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    setup.classList.add("hidden");
  }
});

})();
