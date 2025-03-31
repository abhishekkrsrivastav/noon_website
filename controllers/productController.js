import db from '../config/db.js';


export const getProduct = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM product_view`);
        res.json(rows);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
}