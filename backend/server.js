import Express, { request } from 'express'
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';

dotenv.config();
const app=Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

mongoose.connect( process.env.MONGODB_URL||'mongodb://localhost/e-com', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/',(req,res)=>{
res.send('server has started')
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });

app.listen(process.env.PORT||5000,()=>{
    console.log('port 5000')
});
