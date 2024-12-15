import db from '../database/db.js';

export const insertUser = (req, res) => {
    

    // Validate the input data (optional but recommended)
    const { name, email, phone } = req.body;

    // // Check if all required fields are provided
    // if (!name || !email || !phone) {
    //     return res.status(400).json({ message: 'Name, email, and phone are required!' });
    // }

    // SQL query to insert user data
    const sql = "INSERT INTO user (name, email, phone) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
    ];

    // Use parameterized queries to prevent SQL injection
    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ message: 'Failed to insert data.', error: err.message });
        }

        console.log('User inserted successfully.');
        res.status(201).json({ message: 'User inserted successfully.', id: result.insertId });
    });
};
export const getUsers = (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err.message);
            return res.status(500).json({ message: 'Failed to fetch data.' });
        }
        res.status(200).json(results);
    });
};
export const deleteuser = (req, res) => {
    
}
