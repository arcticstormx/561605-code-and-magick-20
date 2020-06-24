"use strict";
(function() {

var FNAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];
var LNAMES = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];
var COAT_COLORS = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];
var EYES_COLORS = [
  "black",
  "red",
  "blue",
  "yellow",
  "green"
];

var setup = document.querySelector(".setup");
var setupSimilar = document.querySelector(".setup-similar");
var setupList = document.querySelector(".setup-similar-list");
var wizardTemplate = document.getElementById("similar-wizard-template").content;

var getRandomElement = function(arr) {
  return arr[Math.floor(Math.random() * (arr.length))];
};
var createWizard = function(fnames, lnames, coatColors, eyesColors) {
  var wizard = {};
  wizard.name = getRandomElement(fnames) + " " + getRandomElement(lnames);
  wizard.coatColor = getRandomElement(coatColors);
  wizard.eyesColor = getRandomElement(eyesColors);
  return wizard;
};
var createWizardElement = function(wizard) {
  var clone = wizardTemplate.cloneNode(true);
  var wizardName = clone.querySelector(".setup-similar-label");
  var wizardCoat = clone.querySelector(".wizard-coat");
  var wizardEyes = clone.querySelector(".wizard-eyes");

  wizardName.textContent = wizard.name;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;

  return clone;
};

// executed code
var wizardsArr = [];

setup.classList.remove("hidden");

for (var i = 0; i < 4; i++) {
  wizardsArr.push(createWizard(FNAMES, LNAMES, COAT_COLORS, EYES_COLORS));
};

var fragment = document.createDocumentFragment();

wizardsArr.forEach(function(wizardObj) {
  var element = createWizardElement(wizardObj);
  fragment.appendChild(element);
});

setupList.appendChild(fragment);

setupSimilar.classList.remove("hidden");


// colors event listeners

var wizardCoat = document.querySelector(".setup-wizard .wizard-coat");
var wizardEyes = document.querySelector(".setup-wizard .wizard-eyes");
var wizardFireball = document.querySelector(".setup-fireball-wrap");
var FIREBALL_COLORS = [
  "#ee4830",
  "#30a8ee",
  "#5ce6c0",
  "#e848d5",
  "#e6e848"
];

wizardCoat.addEventListener("click", function(evt) {
  evt.currentTarget.style.fill = getRandomElement(COAT_COLORS);
});
wizardEyes.addEventListener("click", function(evt) {
  evt.currentTarget.style.fill = getRandomElement(EYES_COLORS);
});
wizardFireball.addEventListener("click", function(evt) {
  var color = getRandomElement(FIREBALL_COLORS);
  evt.currentTarget.style.backgroundColor = color;
  wizardFireball.querySelector("input[name=fireball-color").value = color;
});
})();
