const express = require("express");
const router = express.Router();
const db = require('../db');

router.get("/", (request, response) => {
    response.render('index');
});

router.get("/:query", (request, response) => {
    response.render('index',{query:request.params.query});
});
router.post("/:query", (request, response) => {
    const query = request.body.query;

    request.checkBody('query', 'Please input a search query').notEmpty();
    const errors = request.validationErrors();

    if (errors)
        response.render('', {
            errors: errors
        });
    else{
        db.any(query).then(data => {
            console.log('Data' + JSON.stringify(data));
            request.flash('success_msg', 'Successful query');
            response.redirect('/'+ JSON.stringify(data));

        }).catch(errors =>{
            request.flash('error_msg', '' + errors);
            response.redirect('/');
        })
    }
});

module.exports = router;