const express = require('express')

const path = require('path');

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

// app
app.use(express.static(__dirname+'/dist/hostelmanagment'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'hostelmanagment', 'index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))