/**
 * Created by maksimkurepov on 25/01/2017.
 */

'use strict';

var setup = {
  setupWindow: document.querySelector('.setup'),
  openButton: document.querySelector('.setup-open'),
  openButtonImage: document.querySelector('.setup-open-icon'),
  closeButton: document.querySelector('.setup-close'),
  nameField: document.querySelector('.setup-user-name'),
  saveButton: document.querySelector('.setup-submit')
};

var wizard = {
  cloak: {
    htmlNode: document.querySelector('#wizard-coat'),
    color: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
  },
  eyes: {
    htmlNode: document.querySelector('#wizard-eyes'),
    color: ['black', 'red', 'blue', 'yellow', 'green']
  },
  fireball: {
    htmlNode: document.querySelector('.setup-fireball-wrap'),
    color: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  }
};

var INVISIBLE_CLASS = 'invisible';

setup.nameField.required = true;
setup.nameField.maxLength = 50;

function openOrClose(windowToOperate, flag, hideClassName, callBack, keyboardinitiated) {
  windowToOperate.classList.toggle(hideClassName, flag);
  if (flag) {
    document.removeEventListener('keydown', closeOnEsc);
  } else {
    document.addEventListener('keydown', closeOnEsc);
    window.openedWithKeyBoard = keyboardinitiated;
  }

  if (typeof callBack === 'function' && window.openedWithKeyBoard) {
    callBack();
    window.openedWithKeyBoard = false;
  }

  function closeOnEsc(evt) {
    if (window.utils.checkTheKey(evt.keyCode, window.utils.ESC_KEY_CODE)) {
      openOrClose(windowToOperate, true, hideClassName);
    }
  }
}

function setFocusOnOpenBtn() {
  setup.openButtonImage.focus();
}

setup.openButton.addEventListener('click', function (evt) {
  openOrClose(setup.setupWindow, false, INVISIBLE_CLASS, null, false);
  evt.target.setAttribute('aria-pressed', 'true');
  setup.closeButton.setAttribute('aria-pressed', 'false');
});

setup.openButton.addEventListener('keydown', function (evt) {
  if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, false, INVISIBLE_CLASS, null, true);
    evt.target.setAttribute('aria-pressed', 'true');
    setup.closeButton.setAttribute('aria-pressed', 'false');
  }
});

setup.closeButton.addEventListener('click', function (evt) {
  openOrClose(setup.setupWindow, true, INVISIBLE_CLASS, setFocusOnOpenBtn, window.openedWithKeyBoard);
  evt.target.setAttribute('aria-pressed', 'false');
  setup.openButton.setAttribute('aria-pressed', 'false');
});

setup.closeButton.addEventListener('keydown', function (evt) {
  if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, true, INVISIBLE_CLASS, setFocusOnOpenBtn, window.openedWithKeyBoard);
  }
  evt.target.setAttribute('aria-pressed', 'false');
  setup.openButton.setAttribute('aria-pressed', 'false');
});

function colorizeCallback(htmlNode, property, colorSet) {
  htmlNode.style[property] = window.utils.getRandomElementExcept(colorSet, htmlNode.style[property]);
}

window.colorizeElement(wizard.cloak.htmlNode, wizard.cloak.color, 'fill', colorizeCallback);
window.colorizeElement(wizard.eyes.htmlNode, wizard.eyes.color, 'fill', colorizeCallback);
window.colorizeElement(wizard.fireball.htmlNode, wizard.fireball.color, 'background-color', colorizeCallback);

setup.saveButton.addEventListener('click', function () {
  openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
});

setup.saveButton.addEventListener('keydown', function (evt) {
  if (window.utils.checkTheKey(evt.keyCode, window.utils.ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
  }
});
