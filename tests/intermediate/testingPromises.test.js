const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');

const service = require('../../src/intermediate/service');
const database = require('../../src/intermediate/databaseMock');

// Import the chaiAsPromised plugin to make promise assertions
// for further information see, https://www.chaijs.com/plugins/chai-as-promised/
chai.use(chaiAsPromised);

const { expect } = chai;

describe('Testing Promises suite', () => {
  // We can use the stubs to test error scenarios and improve the code coverage

  // To understand better about the stubs, see the sinonStubs.test.js
  // file at the intermediate folder

  // Use the Mocha's before hook to setup the stub (mock)
  before(() => {
    this.databaseAggregateStub = sinon.stub(database, 'aggregateData');
  });

  after(() => {
    this.databaseAggregateStub.restore();
  });

  it('Should return true after aggregate', async () => {
    // Arrange
    // Now we can use the stub to resolve the promise
    this.databaseAggregateStub.resolves();

    // Act - Assert
    // Now we can assert if the aggregate returned without errors
    await expect(service.aggregate()).to.be.fulfilled;
    // There are another ways to assert the promise return values
    await expect(service.aggregate()).to.become(true);

    service.aggregate().then((result) => {
      expect(result).to.equal(true);
    });
  });
});
