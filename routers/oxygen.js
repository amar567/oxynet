import express from 'express';
import { outOfStock,getAllProd, addProduct, getBydistrict, report, getById, UpdateById, addProducer, deleteCardByEmail, reportArray, reportArrayLength, deleteMarketByEmail, getByState } from '../controllers/controller.js';

const oxygenRouter = express.Router();
oxygenRouter.get('/', getAllProd);
oxygenRouter.post('/addProduct/:uId', addProduct);
oxygenRouter.post('/addProducer', addProducer);
oxygenRouter.get('/getBydistrict/:district', getBydistrict);
oxygenRouter.get('/getByState', getByState);
oxygenRouter.delete('/deleteAll/:uId', deleteMarketByEmail);
oxygenRouter.delete('/deleteCard', deleteCardByEmail);
oxygenRouter.post('/report', report);
oxygenRouter.get('/reportedArray/:sId', reportArray);
oxygenRouter.get('/reportedArraylength/:sId', reportArrayLength);
oxygenRouter.get('/getById/', getById);
oxygenRouter.post('/updateById' , UpdateById);
oxygenRouter.post('/outofstock', outOfStock);

export default oxygenRouter;