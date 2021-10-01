import { add, subtract, multiply, divide, modulo } from './calculations.js';

const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-btn');
const addAnswer = document.getElementById('add-answer');
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-btn');
const subAnswer = document.getElementById('sub-answer');
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-btn');
const multiplyAnswer = document.getElementById('multiply-answer');
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-btn');
const divideAnswer = document.getElementById('divide-answer');
const moduloInput1 = document.getElementById('modulo-input-1');
const moduloInput2 = document.getElementById('modulo-input-2');
const moduloButton = document.getElementById('modulo-btn');
const moduloAnswer = document.getElementById('modulo-answer');

addButton.addEventListener('click', () => {
    const value1 = Number(addInput1.value);
    const value2 = Number(addInput2.value);
    const result = add(value1, value2);
    addAnswer.textContent = result;
});

subButton.addEventListener('click', () => {
    const value3 = Number(subInput1.value);
    const value4 = Number(subInput2.value);
    const subResult = subtract(value3, value4);
    subAnswer.textContent = subResult;
});

multiplyButton.addEventListener('click', () => {
    const value5 = Number(multiplyInput1.value);
    const value6 = Number(multiplyInput2.value);
    const multiplyResult = multiply(value5, value6);
    multiplyAnswer.textContent = multiplyResult;
});

divideButton.addEventListener('click', () => {
    const value7 = Number(divideInput1.value);
    const value8 = Number(divideInput2.value);
    const divideResult = divide(value7, value8);
    divideAnswer.textContent = divideResult;
});

moduloButton.addEventListener('click', () => {
    const value9 = Number(moduloInput1.value);
    const value10 = Number(moduloInput2.value);
    const moduloResult = modulo(value9, value10);
    moduloAnswer.textContent = moduloResult;
});