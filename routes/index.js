'use strict';

const express = require('express');
const router = express.Router();

const counter = require('./counter');

router.use('/counter', counter);

module.exports = router;