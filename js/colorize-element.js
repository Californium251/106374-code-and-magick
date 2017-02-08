/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';

function colorizeElement (element, colors, property) {
  element.addEventListener('click', function () {
    element.style[property] = window.utils.getRandomElementExcept(colors, element.style[property]);
  });
  element.addEventListener('keydown', function(evt) {
    if (window.checkTheKey(evt.keyCode, window.ENTER_KEY_CODE)) {
      element.style[property] = window.utils.getRandomElementExcept(colors, element.style[property]);
    }
  });
}
