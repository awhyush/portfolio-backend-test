const express = require('express');
const app = express();

app.get('/api/hello', (req, res)=>{

res.json({message :"Hello from API"});
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`server running on port ${port}`));

