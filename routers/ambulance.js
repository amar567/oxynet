import express from 'express';
import {getAllAmbulances,getAmbulance,getAllAmbulancesByState,createAmbulance,updateAmbulance,deleteAmbulance} from '../controllers/ambulanceController.js';

const ambulanceRouter = express.Router();
ambulanceRouter.get('/',getAllAmbulances);
ambulanceRouter.get('/:state',getAllAmbulancesByState);
ambulanceRouter.get('/:id',getAmbulance);
ambulanceRouter.post('/createAmbulance',createAmbulance);
ambulanceRouter.patch('/updateAmbulance/id',updateAmbulance);
ambulanceRouter.delete('deleteAmbulance/id',deleteAmbulance);

export default ambulanceRouter;