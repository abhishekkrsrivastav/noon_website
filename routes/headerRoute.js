import express from 'express';
import { addHeader, deleteHeader, getHeader, getHeaderSetting, updateHeader } from '../controllers/headerController.js'
const router = express.Router();

router.get("/getHeader", getHeader);
router.post('/addHeader', addHeader);
router.put('/updateHeader/:id', updateHeader);
router.delete('/deleteHeader/:id', deleteHeader)



router.get("/getHeaderSetting", getHeaderSetting)


export default router;