/* eslint-disable no-promise-executor-return */
async function getData() {
  return new Promise((resolve) => setTimeout(resolve([1, 2, 3]), 5000));
}

async function createData(data) {
  await new Promise((resolve) => setTimeout(resolve(), 5000));
  return { data };
}

function connect() {
  return true;
}

async function aggregateData() {
  return new Promise((resolve) => setTimeout(resolve, 15000));
}

module.exports = {
  getData,
  createData,
  connect,
  aggregateData,
};
