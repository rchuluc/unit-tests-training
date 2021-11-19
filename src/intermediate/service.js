const database = require('./databaseMock');

function connectToDatabase() {
  try {
    database.connect();
    return true;
  } catch (error) {
    throw Error('Error while connecting', error);
  }
}

async function readData() {
  return database.getData();
}

async function insertData(data) {
  return database.createData(data);
}

async function aggregate() {
  try {
    await database.aggregateData();
    return true;
  } catch (error) {
    throw new Error('Timeout exceeded', error);
  }
}

module.exports = {
  connectToDatabase,
  readData,
  insertData,
  aggregate,
};
