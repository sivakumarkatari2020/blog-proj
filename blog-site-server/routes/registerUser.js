const express = require('express');
const router = express.Router();
const { registerUser } = require('../services/registerUser');

/* GET programming languages. */
router.post('/', async function(req, res, next) {
    try {
        res.json(await registerUser(req.body));
    } catch (err) {
        console.log(err);
        res.render('pages/error');
    }
});

module.exports = router;
