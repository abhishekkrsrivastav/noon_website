import db from '../../noon/config/db.js';


export const getCategorie = async (req, res) => {
    try {
        const [rows] = await db.query(`
        WITH RECURSIVE category_hierarchy AS (
            SELECT 
                category_id,
                category_name,
                sub_category,
                sort_order,
                1 AS level,
                CAST(category_name AS CHAR(255)) AS full_path
            FROM parent_category
            WHERE sub_category = 0

            UNION ALL

            SELECT 
                c.category_id,
                c.category_name,
                c.sub_category,
                c.sort_order,
                ch.level + 1,
                CONCAT(ch.full_path, ' → ', c.category_name) AS full_path
            FROM parent_category c
            JOIN category_hierarchy ch 
              ON c.sub_category = ch.category_id
        )
        SELECT 
            category_id,
            full_path AS category_hierarchy,
            level,
            sort_order
        FROM category_hierarchy
        ORDER BY full_path, sort_order;
    `);
        res.json(rows);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
}