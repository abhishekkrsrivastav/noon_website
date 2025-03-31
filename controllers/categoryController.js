import db from '../config/db.js';


export const getCategorie = async (req, res) => {
    try {
        const [rows] = await db.query('select * from parent_category');
        res.json(rows);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
}