'use strict';

const port = 8010;
const app = require('./src/app');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
const buildSchemas = require('./src/schemas');
const logger = require('./src/logger');

db.serialize(() => {
  buildSchemas(db);

  const server = app(db);

  server.listen(port, () => logger.info(`App started and listening on port ${port}`));
});
