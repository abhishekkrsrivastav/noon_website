import express from 'express';
import { getCategorie } from '../../noon/controllers/categoryController.js';
const router = express.Router();

router.get("/get-categories", getCategorie);


export default router;