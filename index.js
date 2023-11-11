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

app.listen(port, () => {
    console.log(`SYSTEM IS RUNNING ON PORT ${port}`);
});