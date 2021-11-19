/* eslint-disable no-unused-expressions */
// First of all, import the chai library
const chai = require('chai');

// Then unstructure the expect lib, there are another assert styles, see the Chai docs -> https://www.chaijs.com/guide/styles/
const { expect } = chai;

// OR
// const expect = chai.expect

/*
Using this kind of assertion we focus on the BDD style testing (https://en.wikipedia.org/wiki/Behavior-driven_development)
and create more readable tests using a Gherkin like assertion using some chainable
syntatic sugars to improve the readability:

to, be, been, is, that, which, and, has, have, with, at, of, same, but, does, still, also

The complete assertion methods can be found here -> https://www.chaijs.com/api/bdd/
*/

describe('Chai expect suite', () => {
  it('Given a number, the system must ensure that the number is equal to 2', () => {
    // Now, imagine that the following result came from a function
    const result = 2;

    const expectedResult = 2;

    expect(result).to.be.equal(expectedResult);
  });

  it('Given an HTTP request, the body must contain the user and password keys', () => {
    const req = {
      user: 'user1',
      password: 'secretPassword',
    };

    // We can make multiple assertions in the same expect call
    expect(req).to.have.keys(['user', 'password']).but.not.have.key('anotherKey');

    // Or, just call it on another line
    // expect(req).to.not.have.key('anotherKey')
  });

  it('Given an empty array, another array must be created without modify the older one', () => {
    const array = [];

    const newArray = Array.from(array);
    newArray.push(1, 42, 88);

    expect(array).to.still.be.empty;
    expect(newArray).to.have.ordered.members([1, 42, 88]).and.have.lengthOf(3);
  });
});
