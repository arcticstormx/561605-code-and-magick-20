'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx, namesArr, timesArr) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

    ctx.fillStyle = '#000';
    ctx.font = "16px PT Mono";
    ctx.fillText("Ура вы победили!", 215, 50);
    ctx.fillText("Список результатов:", 205, 75);

    ctx.fillText('Вы', 130, 260);
    ctx.fillRect(130, 240, 40, -150);

    ctx.fillText('Вы', 180, 260);
    ctx.fillRect(180, 240, 40, -150);

    ctx.fillText('Вы', 130, 260);
    ctx.fillRect(130, 240, 40, -150);
};
