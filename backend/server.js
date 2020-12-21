import Express from 'express'

import data from "./../src/components/data.mjs";

const app=Express();

app.get('/products/api',(req,res)=>{
    res.send(data.products)
    });

app.get('/',(req,res)=>{
res.send('server hass started')
});

app.listen(5000,()=>{
    console.log('port 5000')
});
