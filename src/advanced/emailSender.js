const emailProvider = require('./emailProvider');

async function send(to, from, messsage) {
  const instance = emailProvider.createInstance({
    server: 'mockserver',
    port: 2225,
  });

  try {
    await instance.sendEmail(
      to,
      from,
      messsage,
    );
  } catch (error) {
    throw new Error('Failed to send email');
  }
}

module.exports = {
  send,
};
