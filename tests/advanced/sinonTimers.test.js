const chai = require('chai');
const sinon = require('sinon');
const model = require('../../src/advanced/model');

const { expect } = chai;

const dateMock = new Date('11-19-2021');

describe('Timers suite', () => {
  // Since our model methods uses the JS Date methods we need to mock them
  // to ensure that we have control over it on the tests, because the test
  // could fail if it take more time to run

  before(() => {
    // To mock the JS Date and other timing functions we use the useFakeTimers from sinon
    this.fakeTimer = sinon.useFakeTimers({
      now: dateMock, // set a date to return on Date.now, or new Date()
      shouldAdvanceTime: false, // The provided time will not change until we call tick method
    });
  });

  after(() => {
    // After the tests, we need to clean the mock to not impact on
    // the other tests using the restore method
    this.fakeTimer.restore();
  });

  it('Should create a model with the createdAt and updatedAt with today\'s date', () => {
    // Arrange
    const item = model.create({ id: 1, value: 15 });

    // Act - Assert
    expect(item.createdAt)
      .is.equal(dateMock.toISOString())
      .and.is.equal(item.updatedAt);
  });

  it('Should update a model and set the updatedAt to the date of the update', () => {
    // Arrange
    let item = model.create({ id: 1, value: 15 });

    // Act - Assert
    expect(item.createdAt).is.equal(dateMock.toISOString());

    // Now we use the tick method to advance in time
    // in milliseconds or a human-readable way
    this.fakeTimer.tick('02:42:00');

    item = model.update(item, 20);

    // Now the newDate is 2 hours and 42 minutes ahead compared to when the item was createds
    const newDate = new Date().toISOString();

    expect(item.updatedAt).to.equal(newDate)
      .and.is.not.equal(item.createdAt);
  });
});
