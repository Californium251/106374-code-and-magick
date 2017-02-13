/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';

window.colorizeElement = (function () {
  function setColorColorOnClick(htmlNode, colorSet, property) {
    htmlNode.style[property] = window.utils.getRandomElementExcept(colorSet, htmlNode.style[property]);
  }

  function setColorColorOnKeyDown(evt, htmlNode, colorSet, property) {
    if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE)) {
      htmlNode.style[property] = window.utils.getRandomElementExcept(colorSet, htmlNode.style[property]);
    }
  }

  return function (htmlNode, colorSet, property) {
    htmlNode.addEventListener('click', setColorColorOnClick.bind(null, htmlNode, colorSet, property));
    htmlNode.addEventListener('keydown', function (evt) {
      setColorColorOnKeyDown(evt, htmlNode, colorSet, property);
    });
  };
})();
