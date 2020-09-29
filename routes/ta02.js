//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

let names = ['Fraser', 'Eriqua', 'Veroniqua']

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        names: names, 
    });
});

router.post('/addUser',(req, res, next) => {
        names.push(req.body.newName)
        return res.redirect('/ta02');
});

router.post('/removeUser',(req, res, next) => {
    names = names.filter((value) => {
        return value != req.body.oldName;

    });
    res.redirect('/ta02');
});


module.exports = router;