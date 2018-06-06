'use strict';
const mysql = require('mysql'), config = require('../config');

module.exports = class Connector {
  constructor() {
    this.connection = null;
  }

  createConnection() {
    if (!this.connection) {
      this.connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
      });
    }

    return this.connection;
  }

  closeConnection() {
    this.connection.end();
  }
};
