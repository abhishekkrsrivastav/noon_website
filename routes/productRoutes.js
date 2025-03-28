import express from 'express';
import { getProduct } from '../../noon/controllers/productController.js';
const router = express.Router();

router.get("/getProduct", getProduct);


export default router;