import {add, subtract, multiply} from './calculations.js';

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