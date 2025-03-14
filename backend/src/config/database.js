import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'srv826.hstgr.io',
    user: process.env.DB_USER || 'u122277233_master',
    password: process.env.DB_PASSWORD || 'H3ct0r2019.',
    database: process.env.DB_NAME || 'u122277233_midas_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;