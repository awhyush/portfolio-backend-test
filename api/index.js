const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/hello', (req, res)=>{
	res.json({message:"hello from api"});
});

app.post('/api/echo', (req, res)=>{
	res.json({
		recieved : req.body,
		timestamp : new Date().toISOString()
	});
});

module.exports = app;
