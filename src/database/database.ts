'use strict';

export {};
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');
const buildSchemas = require('./schemas');

class Database {
  db: any;
  async init() {
    this.db = await open({
      filename: ':memory:',
      driver: sqlite3.Database,
    });
    await buildSchemas(this.db);
  }
}

module.exports = new Database();