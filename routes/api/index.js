const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use("/posts", require('./post'));
router.use("/votes", require('./vote'));
router.use("/comments", require('./comment'));

module.exports = router;