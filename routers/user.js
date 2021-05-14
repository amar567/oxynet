import express from 'express';
import {getAllUsers,getUser,createUser,updateUser,deleteUser} from '../controllers/userController.js';

const UserRouter = express.Router();

UserRouter.get('/',getAllUsers);
UserRouter.get('/getUser/:id',getUser);
UserRouter.post('/createUser',createUser);
UserRouter.patch('/updateUser/id',updateUser);
UserRouter.delete('deleteUser/id',deleteUser);

export default UserRouter;