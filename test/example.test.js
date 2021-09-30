// IMPORT MODULES under test here:
import {add_two, add, subtract, multiply} from '../calculations.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('test add_two ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add_two(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//Adding Calculator Test
test('add function', (expect) => {
    //Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 5;

    //Act
    const actual = add(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should add 2 + 3');
});

test('add function', (expect) => {
    //Arrange
    const input1 = 4;
    const input2 = 5;
    const expected = 9;

    //Act
    const actual = add(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should add 4 + 5');
});

//Subtraction Calculator Test
test('Sub function', (expect) => {
    //Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 1;

    //Act
    const actual = subtract(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should subtract 3 - 2');
});

test('Sub function', (expect) => {
    //Arrange
    const input1 = 4;
    const input2 = 1;
    const expected = 3;

    //Act
    const actual = subtract(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should subtract 4 - 1');
});

test('Sub function', (expect) => {
    //Arrange
    const input1 = 15;
    const input2 = 9;
    const expected = 6;

    //Act
    const actual = subtract(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should subtract 15 - 9');
});

//Multiplication Calculator Test
test('Multiply function', (expect) => {
    //Arrange
    const input1 = 3;
    const input2 = 2;
    const expected = 6;

    //Act
    const actual = multiply(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should multiply 3 * 2');
});

test('Multiply function', (expect) => {
    //Arrange
    const input1 = 4;
    const input2 = 6;
    const expected = 24;

    //Act
    const actual = multiply(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should multiply 4 * 6');
});

test('Multiply function', (expect) => {
    //Arrange
    const input1 = 15;
    const input2 = 9;
    const expected = 135;

    //Act
    const actual = multiply(input1, input2);

    //Assert
    expect.equal(actual, expected, 'Should multiply 15 * 9');
});