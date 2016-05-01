'use strict';

const express = require('express');
const router = require.Router();

const counter = require('./counter');

router.use('/counter', counter);

module.exports = router;