const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const service = require('../../src/intermediate/service');
const database = require('../../src/intermediate/databaseMock');

// Import the sinonChai plugin to make stub assertions
chai.use(sinonChai);

const { expect } = chai;

describe('Stubs suite', () => {
  // Since not isolating the function to test isn't a good pratice we need to
  // mock the database calling inside the service function, to do this we will
  // use the Sinon library.

  // For further information: https://martinfowler.com/bliki/UnitTest.html

  // Use the Mocha's before hook to setup the stub (mock)
  // we can declare a variable to store the stub to reset it later
  let databaseCreateStub;
  // or, just save into the 'this' context
  // but, please, use only one of these methods ;)
  before(() => {
    // Note that we need to import the database file to passs it to the stub method
    // the pattern is sinon.stub(<imported-module>, <method-name>)
    this.databaseGetStub = sinon.stub(database, 'getData');
    // We have to create a stub for each method
    databaseCreateStub = sinon.stub(database, 'createData');
  });

  after(() => {
    // After the tests, we need to clean the mock to not impact on
    // the other tests using the restore method
    this.databaseGetStub.restore();
    databaseCreateStub.restore();
  });

  // Remember to pass an async callback if the function beeing tested is async
  it('Should return a list from database', async () => {
    // Arrange
    // Now that we have created the databaseStub, the test will not call the
    // real implementation, so we need to mock a response from the method
    this.databaseGetStub.returns([7, 8, 9]);

    // Act
    // Now we call the method beeing tested service.readData, the stub
    /// will replace the database call inside the function
    const data = await service.readData();

    // Assert
    expect(data).to.deep.equal([7, 8, 9]).and.lengthOf(3);
  });

  it('Should insert data into the database', async () => {
    // Arrange
    // The createData method returns the data that was created
    // So it's useful to create a variable to be used as input and return
    const dataMock = { id: '123-456', value: 11.5 };
    // Then make the stub return this data
    databaseCreateStub.returns(dataMock);

    // Act
    // Now, we call our service
    await service.insertData(dataMock);

    // Assert
    // This time we will validade if the database createData method was called with
    // the right parameters, see the sinon-chai documentation for more asssertion methods
    // https://www.chaijs.com/plugins/sinon-chai/
    expect(databaseCreateStub).calledOnceWith(dataMock);
  });
});
