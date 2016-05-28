'use strict';

function createWrapper() {
    var div = document.createElement('div');
    div.setAttribute('class', 'wrapper');
    var body = document.querySelector('body');
    body.appendChild(div);
}
function createTitle() {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Тест по программированию';
    h1.setAttribute("class", "p center-block");
    var div = document.querySelector('div');
    div.appendChild(h1);
}
function createQuestion(num) {
    var p = document.createElement('h3');
    p.innerHTML = num + '. Вопрос №' + num;
    p.setAttribute("class", "bg-info");
    var div = document.querySelector('div');
    div.appendChild(p);
}
function createAnswer(num) {
    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    var div = document.querySelector('div');
    div.appendChild(checkbox);
    var label = document.createElement('label');
    label.innerHTML = 'Вариант ответа №' + num + '\n';
    var div2 = document.querySelector('div');
    div2.appendChild(label);
    var br = document.createElement('br');
    div2.appendChild(br);
}
function createButton() {
    var button = document.createElement('input');
    button.setAttribute('type', 'submit');
    button.setAttribute('value', 'Проверить мои результаты');
    button.setAttribute("class", "btn btn-primary center-block");
    var div = document.querySelector('div');
    div.appendChild(button);
}
createWrapper();
createTitle();
createQuestion(1);
createAnswer(1);
createAnswer(2);
createAnswer(3);
createQuestion(2);
createAnswer(1);
createAnswer(2);
createAnswer(3);
createQuestion(3);
createAnswer(1);
createAnswer(2);
createAnswer(3);
createButton();