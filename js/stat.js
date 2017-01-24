'use strict'

function createBubble (x, y, width, height, color, shadowColor, canvas) {
  canvas.fillStyle = shadowColor;
  canvas.fillRect(x + 10, y + 10, width, height);
  canvas.fillStyle = color;
  canvas.fillRect(x, y, width, height);
}

function typeText(textValue, textStyle, textColor, x, y, canvas, interline) {
  canvas.fillStyle = textColor;
  canvas.fontStyle = textStyle;
  var arr = textValue.split('\n');
  for (var i = 0; i < arr.length; i++) {
    canvas.fillText(arr[i], x, y + i * interline);
  };
}

function setColor(name) {
  return name === 'Вы' ? 'rgb(255, 0, 0)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.2) + ')';
}

function setX(colNumber, column) {
  return column.FIRST_POS + (colNumber - 1) * (column.WIDTH + column.SPACE_BETWEEN);
}

function newColumn(name, result, colNumber, chart, times, canvas, column) {
  var setScale = function(chartHeight) {
    function findBestResult(times) {
      return Math.max.apply(null, times);
    }
    return chartHeight / findBestResult(times);
  };
  var columnHeight = setScale(chart.HEIGHT) * result;
  canvas.fillStyle = setColor(name);
  canvas.fillRect(setX(colNumber, column), chart.COOR_Y + chart.HEIGHT - columnHeight, column.WIDTH, columnHeight);
  canvas.fillStyle = 'rgb(0, 0, 0)';
  canvas.fillText(Math.floor(result), setX(colNumber, column), chart.COOR_Y + chart.HEIGHT + column.SPACING_TOP - columnHeight);
  canvas.fillText(name, setX(colNumber, column),chart.COOR_Y + chart.HEIGHT + column.SPACING_BOTTOM);
}

window.renderStatistics = function(ctx, names, times) {
  var CHART = {
    HEIGHT: 110,
    COOR_Y: 110
  };
  var COLUMN = {
    SPACING_TOP: -10,
    SPACING_BOTTOM: 20,
    WIDTH: 40,
    FIRST_POS: 150,
    SPACE_BETWEEN: 50
  };
  var BUBBLE = {
    POS_X: 100,
    POS_Y: 10,
    WIDTH: 420,
    HEIGHT: 270,
    COLOR: 'rgb(255, 255, 255)',
    SHADOW_COLOR: 'rgba(0, 0, 0, 0.7)',
    PADDING_X: 20,
    PADDING_Y: 40
  };
  var TEXT = {
    WELCOME_VAL: 'Ура вы победили!\nСписок результатов:',
    STYLE: '16px PT Mono',
    COLOR: 'rgb(0, 0, 0)',
    INTERLINE_SPACING: 20
  };
  createBubble(BUBBLE.POS_X, BUBBLE.POS_Y, BUBBLE.WIDTH, BUBBLE.HEIGHT, BUBBLE.COLOR, BUBBLE.SHADOW_COLOR, ctx);
  typeText(TEXT.WELCOME_VAL, TEXT.STYLE, TEXT.COLOR, BUBBLE.POS_X + BUBBLE.PADDING_X, BUBBLE.POS_Y + BUBBLE.PADDING_Y, ctx, TEXT.INTERLINE_SPACING);
  for (var i = 0; i < names.length; i++) {
    newColumn(names[i], times[i], i + 1, CHART, times, ctx, COLUMN);
  };
};
