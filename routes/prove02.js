const express = require('express');
const router = express.Router();
let title = "input1"
let summary = "input2"

router.get('/',(req, res, next) => {
    res.render('pages/prove02-form')
});

router.get('/display',(req, res, next) => {
    res.render('pages/prove02-display', { 
        input1: title,
        input2: summary
    });
});

router.post('/addData',(req, res, next) => {
    title = req.body.input1,
    summary = req.body.input2
    return res.redirect('/prove02/display');
});



module.exports = router;