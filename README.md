# NodeJS Unit Tests

This trainig was presented on November 2021.

## Getting Started

To run this project, make sure that you met the following requirements:

- NodeJS v14 at least
- NPM

### Installing Dependencies

To install the project dependencies run the following command on the project root:

```bash
npm install
```

### Test stack

- Mocha: Test runner
- Chai: Assertion library
- Sinon: Mock library
- Rewire: Library to test private functions
- NYC: Code coverage

### Project structure

The project have two folders:

- /src - Where the "real" code lives, it's just fake implementations to simulate a real project.
- /tests - It's where the unit tests are, and we will focus on this training, this folder have three folders inside `basic`, `intermediate`, and `advanced` to divide the tests into topics, `NOTE: This structure it's just for educational purposes`. 

The test files have comments to explain the test behaviour and what we are expecting.

## Running the tests
To run all the tests run on the terminal:

```bash
npm test
```
Or, to run only `basic`, `intermediate`, or `advanced` tests:
```bash
npm run test:basic
```
```bash
npm run test:intermediate
```
```bash
npm run test:advanced
```
## Basic tests
The basic tests covers the foundations of the Mocha and Chai libraries.

| File                                                    | Description                                  |
| ------------------------------------------------------- | -------------------------------------------- |
| [mochaStructure](tests/basic/mochaStructucture.test.js) | An example of the Mocha structure            |
| [mochaHooks](tests/basic/mochaHooks.test.js)            | An example of the Mocha available hooks      |
| [chaiExpect](tests/basic/chaiExpect.test.js)            | Examples of how to use the Chai's expect API |

## Intermediate tests
The intermediate tests covers real case testing scenarios.

| File                                                          | Description                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| [privateFunction](tests/intermediate/privateFunction.test.js) | Testing private functions with Rewire library               |
| [sinonStubs](tests/intermediate/sinonStubs.test.js)           | Mocking external resources using Sinon stubs                |
| [testingErrors](tests/intermediate/testingErrors.test.js)     | Mocking functions to test errors syncronous and asyncronous |
| [testingPromises](tests/intermediate/testingPromises.test.js) | Testing Promises (asyncronous code)                         |

## Advanced tests
The advanced tests cover more complex scenarios that we can find in real world.

| File                                                        | Description                                                                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [sinonTimers](tests/advanced/sinonTimers.test.js)           | Testing `Date` dependent functions                                                                         |
| [testingFactories](tests/advanced/testingFactories.test.js) | Testing libraries that uses the [factory pattern](https://refactoring.guru/design-patterns/factory-method) |