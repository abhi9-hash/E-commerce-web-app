import Express, { request } from 'express'

import data from "./data.mjs";

const app=Express();



app.get('/products/:id',(req,res)=>{
        const Product=data.products.find((x)=>x.id==req.params.id)
        if(Product){
            res.send(Product)
        }
        else{
            res.status(404).send({message:'PRODUCT NOT FOUND'})
        }
        });

app.get('/products',(req,res)=>{
            res.send(data.products)
            });
          
app.get('/',(req,res)=>{
res.send('server has started')
});

app.listen(5000,()=>{
    console.log('port 5000')
});
