'use strict';

function createBubble (bubble, canvas) {
  canvas.fillStyle = bubble.SHADOW_COLOR;
  canvas.fillRect(bubble.POS_X + 10, bubble.POS_Y + 10, bubble.WIDTH, bubble.HEIGHT);
  canvas.fillStyle = bubble.COLOR;
  canvas.fillRect(bubble.POS_X, bubble.POS_Y, bubble.WIDTH, bubble.HEIGHT);
}

function typeText(text, bubble, canvas) {
  canvas.fillStyle = text.COLOR;
  canvas.fontStyle = text.STYLE;
  var arr = text.WELCOME_VAL.split('\n');
  for (var i = 0; i < arr.length; i++) {
    canvas.fillText(arr[i], bubble.POS_X + bubble.PADDING_X, bubble.POS_Y + bubble.PADDING_Y + i * text.INTERLINE_SPACING);
  }
}

function setColor(name) {
  return name === 'Вы' ? 'rgb(255, 0, 0)' : 'rgba(0, 0, 255, ' + (Math.random() + 0.2) + ')';
}

function setX(colNumber, column) {
  return column.FIRST_POS + (colNumber - 1) * (column.WIDTH + column.SPACE_BETWEEN);
}

function newColumn(name, result, colNumber, chart, times, canvas, column) {
  function setScale(chartHeight) {
    return chartHeight / Math.max.apply(null, times);
  }
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
  createBubble(BUBBLE, ctx);
  typeText(TEXT, BUBBLE, ctx);
  for (var i = 0; i < names.length; i++) {
    newColumn(names[i], times[i], i + 1, CHART, times, ctx, COLUMN);
  }
};
