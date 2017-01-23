window.renderStatistics = function(ctx, names, times) {
  var CHART_HEIGHT = 110;
  var COL_WIDTH = 40;
  var SPACE_BETWEEN = 50;
  var FIRST_COL_POSITION = 150;
  var COLUMN_SPACING_TOP = -10;
  var COLUMN_SPACING_BOTTOM = 20;
  var BUBBLE_POS_X = 100;
  var BUBBLE_POS_Y = 10;
  var BUBBLE_WIDTH = 420;
  var BUBBLE_HEIGHT = 270;
  var BUBBLE_COLOR = 'rgb(255, 255, 255)';
  var BUBBLE_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var WELCOME_TEXT = 'Ура вы победили!\nСписок результатов:';
  var TEXT_STYLE = '16px PT Mono';
  var TEXT_COLOR = 'rgb(0, 0, 0)';
  var BUBBLE_PADDING_X = 20;
  var BUBBLE_PADDING_Y = 40;
  var INTERLINE_SPACING = 20;
  var CHART_Y = 110;
  function createBubble (x, y, width, height, color, shadowColor) {
    ctx.fillStyle = shadowColor;
    ctx.fillRect(x + 10, y + 10, width, height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };
  function typeText(textValue, textStyle, textColor, x, y) {
    ctx.fillStyle = textColor;
    ctx.fontStyle = textStyle;
    var arr = textValue.split('\n');
    for (var i = 0; i < arr.length; i++) {
      ctx.fillText(arr[i], x, y + i * INTERLINE_SPACING);
    };
  };
  function newColumn(name, result, colNumber) {
    var setScale = function(chartHeight) {
      function findBestResult(times) {
        var bestResult = 0;
        for (var i = 0; i < times.length; i++) {
          bestResult = times[i] > bestResult ? times[i] : bestResult;
        }
        return bestResult;
      };
      var scale = chartHeight / findBestResult(times);
      return scale;
    };
    function setColor(name) {
      var color = name === 'Вы' ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)';
      return color;
    };
    function setX(colNumber) {
      return FIRST_COL_POSITION + (colNumber - 1) * (COL_WIDTH + SPACE_BETWEEN);
    };
    var columnHeight = setScale(CHART_HEIGHT) * result;
    ctx.fillStyle = setColor(name);
    ctx.fillRect(setX(colNumber), CHART_Y + CHART_HEIGHT - columnHeight, COL_WIDTH, columnHeight);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.floor(result), setX(colNumber), CHART_Y + CHART_HEIGHT + COLUMN_SPACING_TOP - columnHeight);
    ctx.fillText(name, setX(colNumber),CHART_Y + CHART_HEIGHT + COLUMN_SPACING_BOTTOM);
  };
  createBubble(BUBBLE_POS_X, BUBBLE_POS_Y, BUBBLE_WIDTH, BUBBLE_HEIGHT, BUBBLE_COLOR, BUBBLE_SHADOW_COLOR);
  typeText(WELCOME_TEXT, TEXT_STYLE, TEXT_COLOR, BUBBLE_POS_X + BUBBLE_PADDING_X, BUBBLE_POS_Y + BUBBLE_PADDING_Y);
  for (var i = 0; i < names.length; i++) {
    newColumn(names[i], times[i], i + 1);
  };
};
