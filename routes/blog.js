const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.render('./blog/blog');
});

module.exports = router;
