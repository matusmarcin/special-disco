/* eslint-disable no-console */
/* eslint-disable strict */
'use strict';

const mysql = require('mysql');

let db = null;

class Database {
  constructor() {
    return db;
  }

  connect(config) {
    // connect to database
    db = mysql.createConnection(config);

    db.connect((err) => {
      if (!err) {
        console.log('Database is connected!');
      } else {
        console.log('Error connecting database!');
      }
    });
  }
}

module.exports = Database;
