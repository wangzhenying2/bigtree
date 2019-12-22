const express = require('express');
const router = express.Router();

const msg = require('./msg');
const prods = require('./prods');

router.use("/msg", msg);
router.use("/prods", prods);

module.exports = router;