/* eslint-disable no-unused-vars */
function createInstance({ server, port }) {
  return {
    sendEmail: async (from, to, message) => Promise.resolve(true),
  };
}

module.exports = {
  createInstance,
};
