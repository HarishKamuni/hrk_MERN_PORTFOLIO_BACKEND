const express = require('express');
const userCollection = require('../collections/user.collection');

const router = express.Router();

router.post('/portfolio/contact', userCollection);

module.exports = router;
