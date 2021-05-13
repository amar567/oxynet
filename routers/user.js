import express from 'express';
import {getAllUsers,getUser,createUser,updateUser,deleteUser} from '../controllers/userController';

const NgoRouter = express.Router();

NgoRouter.get('/',getAllUsers);
NgoRouter.get('/getNgo/:id',getUser);
NgoRouter.post('/createNgo',createUser);
NgoRouter.patch('/updateNgo/id',updateUser);
NgoRouter.delete('deleteNgo/id',deleteUser);

export default ngoRouter;