var pg = require('pg');

module.exports = {
  connect: function () {
    var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/postgres';
    var client = new pg.Client(connectionString);
    client.connect();
    return client;
  },
  getNextId: function (client) {
    return client.query('select nextval(\'main_seq\')');
  }
};
