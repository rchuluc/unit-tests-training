describe('Hooks suite', () => {
  before(() => {
    // This hook will run before all test cases, it's useful to setup the test
    console.log('Hello from before()');
  });

  beforeEach(() => {
    // This hook will run before each test case
    console.log('Hello from beforeEach()');
  });

  after(() => {
    // This hook will run after all test cases, it's useful to clean up after testing
    console.log('Hello from after()');
  });

  afterEach(() => {
    // This hook will run after each test case
    console.log('Hello from afterEach()');
  });

  it('A test case', () => {
    // Testing...
  });

  it('Another test case', () => {
    // Testing...
  });
});
