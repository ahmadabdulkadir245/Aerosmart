const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 50,
    queueLimit: 0
});
module.exports = pool.promise();
