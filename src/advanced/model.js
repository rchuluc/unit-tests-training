function create({ id, value }) {
  const dateNow = new Date().toISOString();

  return {
    id,
    value,
    createdAt: dateNow,
    updatedAt: dateNow,
  };
}

function update(record, value) {
  const dateNow = new Date().toISOString();

  return {
    ...record,
    value,
    updatedAt: dateNow,
  };
}

module.exports = {
  create,
  update,
};
