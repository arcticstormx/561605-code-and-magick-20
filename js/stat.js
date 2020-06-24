"use strict";
(function() {
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 40;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var FONT_GAP = 10;
var FONT_HEIGHT = 16;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var renderPlayer = function(ctx, playerIndex, playerName, playerScore, maxScore) {
  var barHeight = playerScore / maxScore * BAR_MAX_HEIGHT;
  var playerColor;
  playerName === "Вы" ? playerColor = "rgba(255, 0, 0, 1)" : playerColor = "hsl(240, " + randomNumber(0, 100) + "%, 50%)";
  ctx.fillStyle = playerColor;
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP, BAR_WIDTH, -barHeight);
  ctx.fillStyle = "#000";
  ctx.fillText(playerName, CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + FONT_GAP);
  ctx.fillText(playerScore, CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP - barHeight - FONT_HEIGHT);
};

var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

window.renderStatistics = function(ctx, namesArr, timesArr) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxTime = getMaxElement(timesArr);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2);
    ctx.fillText("Список результатов:", CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2 + FONT_HEIGHT);
    for (var i = 0; i < namesArr.length; i++) {
      renderPlayer(ctx, i, namesArr[i], Math.round(timesArr[i]), maxTime);
    }
};

})();
