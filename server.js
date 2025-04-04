import express from 'express';
import db from './config/db.js';
import headerRoute from './routes/headerRoute.js'
import productRoutes from './routes/productRoutes.js';
import categoryRoute from './routes/categoryRoute.js';
import cors from 'cors';


const app = express();

// middleware
app.use(cors());

const corsOptions = {
    origin: ['http://localhost:3000','https://noon-website.onrender.com'],  
    credentials: true
  };
  app.use(cors(corsOptions)); 

app.use(express.json());

// routes for noon header
app.use('/noon', headerRoute);

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