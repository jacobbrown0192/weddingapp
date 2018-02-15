//server.js
'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
var User = require('./model/user');
var RSVP = require('./model/rsvp');

//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;

mongoose.connect('Mongo connection goes here');

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
    console.log(`api running on port ${port}`);
});

router.route('/comments')
    .get(function(req,res)
    {
        Comment.find(function(err, comments)
        {
            if (err)
                res.send(err);
            res.json(comments)
        }).where('hidden').equals('false')
    })
    .post(function(req, res)
    {
            var comment = new Comment();
            comment.author = req.body.author;
            comment.text = req.body.text;
            comment.hidden = req.body.hidden;
            comment.votes = req.body.votes;
            comment.save(function (err)
            {
                if (err)
                    res.send(err);
                res.json({message: 'User successfully added!'});
            }
        );
    });
router.route('/comments/:comment_id')
    .put(function(req, res) {
        Comment.findById(req.params.comment_id, function (err, comment) {
            if (err)
                res.send(err);
            (res.body.author) ? comment.author = req.body.author : null;
            (res.body.text) ? comment.text = req.body.text : null;
            comment.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'User has been updated'});
            });
        });
    })
    .delete(function(req, res)
    {
        Comment.remove({_id: req.params.comment_id }, function(err, comment)
        {
            if (err)
                res.send(err);
            res.json({message: 'User has been deleted'})
        })
    });

router.route('/signin')
    .post(function(req,res)
        {
            let password = req.body.password;
            User.find(function(err, users)
            {
                if (err) throw err;
                // test a matching password
                for (var user of users) {
                    user.comparePassword(password, function (err, isMatch) {
                        if (err) throw err;
                        if (isMatch)
                        {
                            console.log('Password123:', isMatch); // -&gt; Password123: true
                            res.json(user)
                        }
                    });
                }
            });
        }
    );
router.route('/signout')
    .get(function(req,res)
    {
    });
router.route('/signup')
    .post(function(req, res)
        {
            var user = new User();
            user.access = req.body.access;
            user.password = req.body.password;
            //generate unique passphrase
            //require admin auth
            user.save(function (err)
                {
                    if (err)
                        res.send(err);
                    res.json({message: 'User successfully added!'});
                }
            );
        });
router.route('/users')
    .get(function(req, res)
    {
        User.find(function(err, users)
        {
            if (err)
                res.send(err);
            res.json(users)
        })
    });

router.route('/user/:user_id')
    .get(function(req, res)
    {
        User.findById(req.params.user_id, function(err, user)
        {
            if (err)
                res.send(err);
            res.json(user)
        })
    })
    .delete(function(req, res)
    {
        User.remove({_id: req.params.user_id }, function(err, comment)
        {
            if (err)
                res.send(err);
            res.json({message: 'User has been deleted'})
        })
    });

router.route('/rsvpadd') //TODO: FIX to Allo Multiple at once
    .post(function(req,res)
    {
        req.body.rsvp.forEach(function(r)
        {
            let rsvp = new RSVP();
            rsvp.id = req.body.userid;
            rsvp.num = r.num;
            rsvp.name = r.name;
            rsvp.attending = r.attending;
            rsvp.food = r.food;
            rsvp.consideration = r.consideration;
            rsvp.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'RSVP successfully added!'});
            });
        })
    });

router.route('/rsvp') //TODO: fix this
    .post(function(req,res)
    {
        let id = req.body.userid;
        RSVP.find(function(err, rsvp)
        {
            if (err)
                res.send(err);
            res.json(rsvp)
        }).where('id').equals(id);
    })
    .get(function(req,res)
    {
        RSVP.find(function(err, rsvp)
        {
            if (err)
                res.send(err);
            res.json(rsvp)
        });
    });

router.route('/rsvp/:rsvp_id')
    .put(function(req, res) {
        RSVP.findById(req.params.rsvp_id, function (err, rsvp) {
            if (err)
                res.send(err);
            console.log(rsvp);
            if(rsvp || rsvp !== null) {
                (req.body.consideration) ? rsvp.consideration = req.body.consideration : null;
                (req.body.food) ? rsvp.food = req.body.food : null;
                (req.body.name) ? rsvp.name = req.body.name : null;
                (req.body.attending) ? rsvp.attending = req.body.attending : null;
                rsvp.save(function (err) {
                    if (err)
                        res.send(err);
                    res.json({message: 'User has been updated'});
                });
            }
            else
            {
                res.json({message: 'Could not find rsvp'});
            }
        });
    })
    .delete(function(req, res)
    {
        console.log(req.params.rsvp_id)
        RSVP.remove({_id: req.params.rsvp_id }, function(err, rsvp)
        {
            if (err)
                res.send(err);
            res.json({message: 'User has been deleted'})
        })
    });