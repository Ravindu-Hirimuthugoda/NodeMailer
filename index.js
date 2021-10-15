const express = require('express');
const app = express();

app.use('/',res.send(<p>'Hello world'</p>));

app.listen(6000,()=>{
    console.log('Server running');
})