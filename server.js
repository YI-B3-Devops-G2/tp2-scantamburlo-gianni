'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/status', (req, res) => {
    res.json({
		status: "OK",
		postgresUptime: String,
		redisConnectedClients: Number
	})
})

app.get('/', (req, res) => {
res.json('Hello World')
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);