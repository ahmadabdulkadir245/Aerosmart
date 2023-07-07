const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Function to keep the connection alive
function keepAlive() {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection from pool:', err);
            return;
        }
        console.log('Connection acquired from the pool.');

        // Perform a dummy query to keep the connection alive
        connection.query('SELECT 1', (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
            }
            console.log('Dummy query executed successfully.');

            // Release the connection back to the pool
            connection.release();
            console.log('Connection released back to the pool.');

            // Schedule the next keep alive call after a certain interval (e.g., every 5 minutes)
            setTimeout(keepAlive, 5 * 60 * 1000);
        });
    });
}

// Start the keep alive process
keepAlive();

module.exports = pool.promise();
