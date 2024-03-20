const express = require('express')
const app = express()
const port = 3000;

// routes

app.get('/', (req, res) =>{
    res.send('Hello ');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
})