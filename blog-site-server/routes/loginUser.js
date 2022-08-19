const express = require('express');
const router = express.Router();
const { loginUser } = require('../services/loginUser');

/* GET programming languages. */
router.post('/', async function(req, res, next) {
    try {
        res.json(await loginUser(req.body));
    } catch (err) {
        console.log(err);
        res.render('pages/error');
    }
});

module.exports = router;