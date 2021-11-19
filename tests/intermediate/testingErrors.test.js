const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');

const service = require('../../src/intermediate/service');
const database = require('../../src/intermediate/databaseMock');

// Import the chaiAsPromised plugin to make promise assertions
// for further information see, https://www.chaijs.com/plugins/chai-as-promised/
chai.use(chaiAsPromised);

const { expect } = chai;

describe('Testing errors suite', () => {
  // We can use the stubs to test error scenarios and improve the code coverage

  // To understand better about the stubs, see the sinonStubs.test.js
  // file at the intermediate folder

  // Use the Mocha's before hook to setup the stub (mock)
  before(() => {
    this.databaseConnectStub = sinon.stub(database, 'connect');
    this.databaseAggregateStub = sinon.stub(database, 'aggregateData');
  });

  after(() => {
    this.databaseConnectStub.restore();
    this.databaseAggregateStub.restore();
  });

  it('Should return a a connection error', () => {
    // Arrange
    // Now we can use the stub to throw the error and test if our try/catch block is working
    this.databaseConnectStub.throws(new Error('Stub error'));

    // Act - Assert
    // Now we call the method beeing tested service.connectToDatabase inside the expect()
    // as we are throwing an error the catch block will be triggered
    expect(() => service.connectToDatabase()).to.throw('Error while connecting');
  });

  it('Should return an error if the timeout exceeds', async () => {
    // Arrange
    // We will do the same as the above test, if the mocked function returns a
    // Promise, you can use the rejects method
    this.databaseAggregateStub.rejects('Timeout');

    // Act - Assert
    // Now we call the method beeing tested service.aggregate inside the expect().
    // As we are rejecting the database promise the catch block will be triggered
    // Note that, this time we don't have the arrow function inside the expect(), and we
    // have the await outside of it.
    await expect(service.aggregate()).to.be.eventually.rejectedWith('Timeout exceeded');
  });
});
