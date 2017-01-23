window.renderStatistics = function(ctx, names, times) {
  var ctxWidth = 420;
  var ctxHeight = 270;
  var ctxPositionX = 100;
  var ctxPositionY = 10;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(ctxPositionX + 10, ctxPositionY + 10, ctxWidth, ctxHeight);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(ctxPositionX, ctxPositionY, ctxWidth, ctxHeight);
  ctx.fontStyle = '16px PT Mono';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText("Ура, Вы победили!", 150, 40);
  ctx.fillText("Список результатов:", 150, 60);
  var bestResult = 0;
  var findBestResult = function(times){
    for (var i = 0; i < times.length; i++) {
      if (times[i] > bestResult) bestResult = times[i];
    }
    return bestResult;
  };
  var setScale = function() {
    var scale = 110 / findBestResult(times);
    return scale;
  }
  var newColumn = function(name, result, colNumber) {
    function randomColor() {
      return 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';
    }
    var setX = function(colNumber) {
      return 150 + (colNumber - 1)  * 90;
    };
    var columnHeight = setScale() * result;
    ctx.fillStyle = randomColor();
    ctx.fillRect(setX(colNumber), 230 - columnHeight, 50, columnHeight);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(Math.floor(result), setX(colNumber), 220 - columnHeight);
    ctx.fillText(name, setX(colNumber),250);
  };
  for (var i = 0; i < names.length; i++) {
    newColumn(names[i], times[i], i + 1);
}
};
