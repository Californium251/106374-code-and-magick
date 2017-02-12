/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';


window.utils = (function () {
  var checkTheKey = function (evtKeyDown, btnKeyCode) {
    return evtKeyDown && evtKeyDown === btnKeyCode;
  };
  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  };
  return {
    getRandomElementExcept: function (arr, elementToExclude) {
      var elementToReturn = getRandomElement(arr);
      if (elementToExclude === elementToReturn) {
        this.getRandomElementExcept(arr, elementToExclude);
      }
      return elementToReturn;
    },
    checkTheKey: checkTheKey,
    ENTER_KEY_CODE: 13,
    ESC_KEY_CODE: 27
  };
})();
