// Setup dotenv to hide our MySQL database login information
import * as dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config({ path: __dirname+'./env' });

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log(`Successfully connected to employee database`)
);

db.connect(function (err) {
  if (err) {
    throw err;
  }
});

export default db;
