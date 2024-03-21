const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Try: / and /data/"table"')
});

module.exports = router;
