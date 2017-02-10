/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';

window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, element.style[property]);
  });
  element.addEventListener('keydown', function (evt) {
    if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, element.style[property]);
    }
  });
};
