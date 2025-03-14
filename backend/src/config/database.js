import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'master',
    password: process.env.DB_PASSWORD || 'H3ct0r2019.',
    database: process.env.DB_NAME || 'midas_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;