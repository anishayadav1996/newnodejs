import mysql from "mysql";

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_crud',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
     db.connect((error)=>{
        if(error) throw error ;
        console.log("connection successfully !");
        
     })

export default db;