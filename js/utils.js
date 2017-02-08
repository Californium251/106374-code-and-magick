/**
 * Created by maksimkurepov on 07/02/2017.
 */

var utils = {
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  },
  getRandomElementExcept: function (arr, elementToExclude) {
    var elementToReturn = this.getRandomElement(arr);
    if (elementToExclude === elementToReturn) {
      this.getRandomElementExcept(arr, elementToExclude);
    } else {
      return elementToReturn;
    }
    return '';
  }
};
