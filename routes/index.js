const express = require("express");
const router = express.Router();
const db = require('../db');


router.get("/", (request, response) => {
    response.render('index', {
        data:'Hello!'
    });
});
/*
db.any(`INSERT INTO club ("cid", "age", "team", "city" ) VALUES (3522, 100, 'Manchester FC', 'Manchester, England')`)
    .then( _ => db.any(`SELECT * FROM club`) )
    .then(data => response.json('index', {title: 'Index', data: data}))
    .catch( error => {
        console.log( error );
        response.json({ error });
    })*/
module.exports = router;