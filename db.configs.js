// db.configs.js

const mysql = require('mysql');

const dbConfig = {
  host: 'kevinnz2164@gmail.com',
  user: 'sql10626267',
  password: 'FZLLAecBGV',
  database: 'sql10626267',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
