/**
 * Created by maksimkurepov on 25/01/2017.
 */

'use strict';

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var setup = {
  setupWindow: document.querySelector('.setup'),
  openButton: document.querySelector('.setup-open'),
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

function setNewColor(colorSet) {
  return colorSet[Math.floor(Math.random() * colorSet.length)];
}

function openOrClose(windowToOperate, flag, hideClassName) {
  windowToOperate.classList.toggle(hideClassName, flag);
  if (flag) {
    document.removeEventListener('keydown', closeOnEsc);
  } else {
    document.addEventListener('keydown', closeOnEsc);
  }

  function closeOnEsc(evt) {
    if (checkTheKey(evt.keyCode, ESC_KEY_CODE)) {
      openOrClose(windowToOperate, true, hideClassName);
    }
  }
}

function checkTheKey(evtKeyDown, btnKeyCode) {
  return evtKeyDown && evtKeyDown === btnKeyCode;
}

setup.openButton.addEventListener('click', function (evt) {
  openOrClose(setup.setupWindow, false, INVISIBLE_CLASS);
  evt.target.setAttribute('aria-pressed', 'true');
  setup.closeButton.setAttribute('aria-pressed', 'false');
});

setup.openButton.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, false, INVISIBLE_CLASS);
    evt.target.setAttribute('aria-pressed', 'true');
    setup.closeButton.setAttribute('aria-pressed', 'false');
  }
});

setup.closeButton.addEventListener('click', function (evt) {
  openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
  evt.target.setAttribute('aria-pressed', 'false');
  setup.openButton.setAttribute('aria-pressed', 'false');
});

setup.closeButton.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
  }
  evt.target.setAttribute('aria-pressed', 'false');
  setup.openButton.setAttribute('aria-pressed', 'false');
});

wizard.cloak.htmlNode.addEventListener('click', function () {
  wizard.cloak.htmlNode.style.fill = setNewColor(wizard.cloak.color);
});

wizard.cloak.htmlNode.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    wizard.cloak.htmlNode.style.fill = setNewColor(wizard.cloak.color);
  }
});

wizard.eyes.htmlNode.addEventListener('click', function () {
  wizard.eyes.htmlNode.style.fill = setNewColor(wizard.eyes.color);
});

wizard.eyes.htmlNode.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    wizard.eyes.htmlNode.style.fill = setNewColor(wizard.eyes.color);
  }
});

wizard.fireball.htmlNode.addEventListener('click', function () {
  wizard.fireball.htmlNode.style.backgroundColor = setNewColor(wizard.fireball.color);
});

wizard.fireball.htmlNode.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    wizard.fireball.htmlNode.style.backgroundColor = setNewColor(wizard.fireball.color);
  }
});

setup.saveButton.addEventListener('click', function () {
  openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
});

setup.saveButton.addEventListener('keydown', function (evt) {
  if (checkTheKey(evt.keyCode, ENTER_KEY_CODE)) {
    openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
  }
});
