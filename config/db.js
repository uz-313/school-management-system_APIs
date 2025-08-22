const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
// const dotEnv = require("dotenv");
// dotEnv.config();

const dbConnection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});


(async () => {
    try {
        const schemaPath = path.join(__dirname, '../schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');
        const connection = await dbConnection.getConnection();
        await connection.query(schema);
        connection.release();
        console.log('Table created successfully');
    } catch (err) {
        console.error('Error creating table:', err);
    }
})();

module.exports = dbConnection;