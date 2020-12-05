const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.render('./contact/contact');
});

module.exports = router;
