import express from 'express';
// import db from '../noon/config/db.js';
import db from './config/db.js';
import productRoutes from '../noon/routes/productRoutes.js';
import categoryRoute from '../noon/routes/categoryRoute.js';
import cors from 'cors';


const app = express();

// middleware
app.use(cors());
app.use(express.json());


// routes for category
app.use('/noon', categoryRoute);

// routes for product
app.use('/noon', productRoutes)


const PORT = process.env.PORT || 8888;


db.query('SELECT 1').then(() => {
    // mysql connected
    console.log("Mysql Connected");

    // server listening 
    app.listen(PORT, () => {
        console.log(`server listening on port no ${PORT}`);
    });
    


}).catch((error) => {
    console.log(error);

})