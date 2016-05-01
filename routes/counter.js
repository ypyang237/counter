'use strict';

const express = require('express');
const router = express.Router();

let count = 0;

router.route('/')
  .get((req, res) => {
    res.json({ count : count });
  });

module.exports = router;
