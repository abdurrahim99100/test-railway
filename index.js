const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middle ware;
app.use(express());
app.use(cors());

// by default det operation;
app.get('/', (req, res) => {
    res.send('RAILWAY TEST SERVER IS RUNNING');
});

app.get('/local', (req, res) => {
    res.send('Local data okay');
});

app.get('/all', (req, res) => {
    res.send('All test okay');
});

app.listen(port, () => {
    console.log(`SYSTEM IS RUNNING ON PORT ${port}`);
});