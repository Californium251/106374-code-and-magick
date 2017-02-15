/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';

window.colorizeElement = (function () {
  function setColorColorOnClick(htmlNode, colorSet, property, callback) {
    if (typeof callback === 'function') {
      var color = window.utils.getRandomElementExcept(colorSet, htmlNode.style[property]);
      callback(htmlNode, property, color);
    }
  }

  function setColorColorOnKeyDown(evt, htmlNode, colorSet, property, callback) {
    if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE) && typeof callback === 'function') {
      var color = window.utils.getRandomElementExcept(colorSet, htmlNode.style[property]);
      callback(htmlNode, property, color);
    }
  }

  return function (htmlNode, colorSet, property, callback) {
    htmlNode.addEventListener('click', setColorColorOnClick.bind(null, htmlNode, colorSet, property, callback));
    htmlNode.addEventListener('keydown', function (evt) {
      setColorColorOnKeyDown(evt, htmlNode, colorSet, property, callback);
    });
  };
})();
