/**
 * Created by maksimkurepov on 25/01/2017.
 */

'use strict';

var setup = {
  setupWindow: document.querySelector('.setup'),
  openButton: document.querySelector('.setup-open'),
  closeButton: document.querySelector('.setup-close'),
  nameField: document.querySelector('.setup-user-name'),
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

function setNewColor(whatToBeChanged, colorSet) {
  whatToBeChanged.style.fill = colorSet[Math.floor(Math.random() * colorSet.length)];
  return whatToBeChanged.style.fill;
}

function openOrClose(window, flag, hideClassName) {
  //flag = true - скрой. А flag = false - покажи
  if (flag && !window.classList.contains(hideClassName)) {
    window.classList.add(hideClassName);
  }
  if (!flag && window.classList.contains(hideClassName)) {
    window.classList.remove(hideClassName);
  }
}

setup.openButton.addEventListener('click', function() {
  openOrClose(setup.setupWindow, false, INVISIBLE_CLASS);
});

setup.closeButton.addEventListener('click', function() {
  openOrClose(setup.setupWindow, true, INVISIBLE_CLASS);
});

wizard.cloak.htmlNode.addEventListener('click', function(evt) {
  setNewColor(wizard.cloak.htmlNode, wizard.cloak.color);
});

wizard.eyes.htmlNode.addEventListener('click', function(evt) {
  setNewColor(wizard.eyes.htmlNode, wizard.eyes.color);
});

wizard.fireball.htmlNode.addEventListener('click', function() {
  wizard.fireball.htmlNode.style.backgroundColor = setNewColor(wizard.fireball.htmlNode, wizard.fireball.color);
});
