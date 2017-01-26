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
}


setup.openButton.addEventListener('click', function(evt) {
  if(setup.setupWindow.classList.contains('invisible')) setup.setupWindow.classList.remove('invisible');
});  //Может функцию стоит сделать методом объекта, а листенером просто ее вызывать?

setup.closeButton.addEventListener('click', function(evt) {
  if (!(setup.setupWindow.classList.contains('invisible'))) setup.setupWindow.classList.add('invisible');
})

setup.nameField.required = true;
setup.nameField.maxLength = 50;

function setNewColor(whatToBeChanged) {
  whatToBeChanged.htmlNode.style.fill = whatToBeChanged.color[Math.round(Math.random() * whatToBeChanged.color.length - 1)];
  return whatToBeChanged.htmlNode.style.fill;
}

wizard.cloak.htmlNode.addEventListener('click', function(){
  setNewColor(wizard.cloak);
});
wizard.eyes.htmlNode.addEventListener('click', function() {
  setNewColor(wizard.eyes);
});
wizard.fireball.htmlNode.addEventListener('click', function(){
  wizard.fireball.htmlNode.style.backgroundColor = setNewColor(wizard.fireball);
});
