var express = require('express');
var router = express.Router();

const models = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    models.User({
        name: 'User ' + Math.random(),
        email: 'email@' + Math.random() + '.com'
    })
    .save(function(err, user) {
        if(err) {
            console.log(err)
        }
    })

    models.User.find()
    .then(function (users) {
        if(!users) {
            res.send([])
        } else {
            // res.send(users)
          res.render('index', { title: 'Express' });
        }
    })
});

module.exports = router;
