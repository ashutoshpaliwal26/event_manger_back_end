import express from 'express';
import { createUser } from '../controllers/auth/createUser';
import { updateUser } from '../controllers/auth/updateUser';
import { loginUser } from '../controllers/auth/loginUser';
import { deleteUser } from '../controllers/auth/deleteUser';

const AuthRouter = express.Router();

AuthRouter.route("/login").post(loginUser)
AuthRouter.route("/signup").post(createUser)
AuthRouter.route("/delete").post(deleteUser)
AuthRouter.route("/update").post(updateUser)

export default AuthRouter;