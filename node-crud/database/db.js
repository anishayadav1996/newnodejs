import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.connect((error) => {
    if (error) {
        console.error("Database connection failed: ", error.message);
        return;
    }
    console.log("Database connected successfully!");
});

export default db;
