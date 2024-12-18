import db from '../database/db.js';

export const insertUser = (req, res) => {
    

    // Validate the input data (optional but recommended)
    const { name, email, phone } = req.body;

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
    
    const userId = req.params.id;
    const deleteQuery = "DELETE FROM user WHERE id = ?"; // Adjust table name as needed
  
    db.query(deleteQuery, [userId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Failed to delete user" });
      }
      return res.status(200).json({ message: "User deleted successfully" });
    });
}

export const updateuser =  (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
  
    const query = `UPDATE user SET name = ?, email = ?, phone = ? WHERE id = ?`;
    const values = [name, email, phone, id];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error updating user.");
      }
      if (result.affectedRows === 0) {
        return res.status(404).send("User not found.");
      }
      res.send("User updated successfully!");
    });
  };

