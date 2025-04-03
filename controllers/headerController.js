import db from '../config/db.js';


export const getHeader = async (req, res) => {
    try {
        const [rows] = await db.query('select * from header');
        res.json(rows);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
}


// Add New Navbar Element
export const addHeader = async (req, res) => {
    const { header_name, header_icon, header_url, sort_order, status_id } = req.body;
    try {
        const [result] = await db.query(`INSERT INTO header (header_name, header_icon, header_url, sort_order, status_id) VALUES (?, ?, ?, ?, ?)`,
            [header_name, header_icon, header_url, sort_order, status_id]);
        res.json({ message: 'Header item added successfully', id: result.insertId });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
};

// Update Navbar Element
export const updateHeader = async (req, res) => {
    const { header_name, header_icon, header_url, sort_order, status_id } = req.body;
    try {
        await db.query(`UPDATE header SET header_name=?, header_icon=?, header_url=?, sort_order=?, status_id=? WHERE header_id=?`,
            [header_name, header_icon, header_url, sort_order, status_id, req.params.id]);
        res.json({ message: 'Header item updated successfully' });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
};

// Delete Navbar Element
export const deleteHeader = async (req, res) => {
    try {
        await db.query(`DELETE FROM header WHERE header_id=?`, [req.params.id]);
        res.json({ message: 'Header item deleted successfully' });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
};











export const getHeaderSetting = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM header_settings WHERE id = 1`);
        res.json(rows[0]);
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
}



// Update Navbar Settings
export const updateNavbarSettings = async (req, res) => {
    const { background_color, text_color, hover_color, logo_url, search_placeholder, delivery_location, language_toggle } = req.body;
    try {
        await db.query(`UPDATE navbar_settings SET background_color=?, text_color=?, hover_color=?, logo_url=?, search_placeholder=?, delivery_location=?, language_toggle=? WHERE id=1`,
            [background_color, text_color, hover_color, logo_url, search_placeholder, delivery_location, language_toggle]);
        res.json({ message: 'Navbar settings updated successfully' });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ error: 'Database error' });
    }
};


