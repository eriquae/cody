const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/form', { 
        title: 'Prove 01', 
        path: '/prove01',
    });
});


router.post('/submitData',(req, res, next) => {
    res.render('pages/display', { 
        title: 'Prove 01', 
        path: '/prove01',
        // I got help from the solution video to know how to submit the form data to the display page.
        input_1: req.body.input1,
        input_2: req.body.input2
    });
});

module.exports = router;