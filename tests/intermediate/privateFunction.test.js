/* eslint-disable no-underscore-dangle */
const chai = require('chai');
const rewire = require('rewire');
const { formatText } = require('../../src/intermediate/privateFunction');

const { expect } = chai;

describe('Private functions suite ', () => {
  it('Should return an object with the original text and the formated text', () => {
    // Testing the public function

    // Arrange
    const input = 'My text';

    // Act
    const result = formatText(input);

    // Assert
    const expected = {
      original: 'My text',
      upperCase: 'MY TEXT',
      lowerCase: 'my text',
    };

    expect(result).to.deep.equal(expected);
  });

  it('Should test only the convertToUpperCase method', () => {
    // Here we use the rewire to get the private function
    // it use the following pattern rewire(<filepath>).__get__(<method-name>)
    // If you change the method's name you need to change the method named passed to __get__
    const convertToUpperCase = rewire('../../src/intermediate/privateFunction').__get__('convertToUpperCase');

    // Now we can use de Arrange, Act, Assert pattern

    // Arrange
    const input = 'A string';

    // Act
    const result = convertToUpperCase(input);

    // Assert
    const expected = 'A STRING';
    expect(result).to.equal(expected);
  });

  it('Should test only the convertToLowerCase method', () => {
    // As we did in the above test, we will test the another private method.
    const convertToLowerCase = rewire('../../src/intermediate/privateFunction').__get__('convertToLowerCase');

    // Arrange
    const input = 'MAKE THIS SMALL';

    // Act
    const result = convertToLowerCase(input);

    // Assert
    const expected = 'make this small';
    expect(result).to.equal(expected);
  });
});
