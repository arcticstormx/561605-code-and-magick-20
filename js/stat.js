"use strict";

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
var maxScore

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderPlayer = function(ctx, playerIndex, playerName, playerScore, playerColor) {
  // if (playerName === "Вы") playerColor = "#000";
  ctx.fillStyle = "red";
  var barHeight = playerScore / maxScore;
  ctx.fillText(playerName, CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + FONT_GAP);
  ctx.fillText(playerScore, CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP + FONT_GAP);
  ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_Y + CLOUD_HEIGHT - BAR_GAP, BAR_WIDTH, -barHeight);
};

var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

window.renderStatistics = function(ctx, namesArr, timesArr) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'top';
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2);
    ctx.fillText("Список результатов:", CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2 + FONT_HEIGHT);
    renderPlayer(ctx, 0, namesArr[0])
    // for (let i = 0; i < namesArr.length; i++) {
    //   renderPlayer(i, namesArr[i], timesArr[i], null);
    //   // renderPlayer(i, namesArr[i], timesArr[i], "hsl(240, " + randomNumber(0, 100) + "%, 50%)");
    // }
};
