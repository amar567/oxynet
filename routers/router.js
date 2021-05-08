import express from 'express';
import { outOfStock,getAllProd, addProduct, getBydistrict, report, getById, UpdateById, addProducer, deleteCardByEmail, reportArray, reportArrayLength, deleteMarketByEmail, getByState } from '../controllers/controller.js';

const router = express.Router();
router.get('/', getAllProd);
router.post('/addProduct/:uId', addProduct);
router.post('/addProducer', addProducer);
router.get('/getBydistrict/:district', getBydistrict);
router.get('/getByState', getByState);
router.delete('/deleteAll/:uId', deleteMarketByEmail);
router.delete('/deleteCard', deleteCardByEmail);
router.post('/report', report);
router.get('/reportedArray/:sId', reportArray);
router.get('/reportedArraylength/:sId', reportArrayLength);
router.get('/getById/', getById);
router.post('/updateById' , UpdateById);
router.post('/outofstock', outOfStock);

export default router;
