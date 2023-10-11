import userController from "../controller/userController";
const express = require("express");
const router = express.Router();

router.get('/users', (userController.listUsers));
router.post('/users', (userController.createUser));
router.put('/user/:id', (userController.editUser));
router.delete('/user/:id', (userController.deleteUser));

export default router;