const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user')
var cors = require('cors')

const PORT = process.env.PORT || 5050;

const dbUrl = "mongodb://localhost/reactpress"
app.use(express.json())
app.use(cors())
app.use('/api/auth', userRoutes)

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
	console.log(err);
})

db.once('open', () => {
	console.log('DB started successful');
})

app.get("/", (req, res) => {
	res.send("Server is up and running");
});

app.listen(PORT, (req, res) => {
	console.log(`Server is running on port: ${PORT}`);
})