/**
 * Created by maksimkurepov on 07/02/2017.
 */
'use strict';

window.utils = {
  ENTER_KEY_CODE: 13,
  ESC_KEY_CODE: 27,
  checkTheKey: function (evtKeyDown, btnKeyCode) {
    return evtKeyDown && evtKeyDown === btnKeyCode;
  },
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  },
  getRandomElementExcept: function (arr, elementToExclude) {
    var elementToReturn = this.getRandomElement(arr);
    if (elementToExclude === elementToReturn) {
      this.getRandomElementExcept(arr, elementToExclude);
    }
    return elementToReturn;
  }
};
