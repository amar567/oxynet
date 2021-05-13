import express from 'express';
import {getAllNgos,getNgo,createNgo,updateNgo,deleteNgo} from '../controllers/ngoController.js';

const NgoRouter = express.Router();

NgoRouter.get('/',getAllNgos);
NgoRouter.get('/getNgo/:id',getNgo);
NgoRouter.post('/createNgo',createNgo);
NgoRouter.patch('/updateNgo/id',updateNgo);
NgoRouter.delete('deleteNgo/id',deleteNgo);

export default NgoRouter;