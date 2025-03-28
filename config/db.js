import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
 


const db = mysql.createPool({
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASS,
    // database: process.env.NAME,
    host: "151.106.103.101",
    user: "webinfinity_ajitnew",
    password: "Ajit@123#",
    database: "webinfinity_noon" 
});
 
export default db;