import express from 'express';
import { insertUser } from '../controllers/userController.js';
import { getUsers } from '../controllers/userController.js';
import { deleteuser } from '../controllers/userController.js';
const router = express.Router();

// Route to insert a new user
router.post('/adduser', insertUser)
      .get("/fetch", getUsers)
      .delete("user/:id",deleteuser);

export default router;
