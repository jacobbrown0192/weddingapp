//server.js
'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
var Song = require('./model/song');
var User = require('./model/user');
var RSVP = require('./model/rsvp');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://planner:regency-warden-tumbler-nihilist@ds243295.mlab.com:43295/brownquinlanweddingapp');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
});

app.use('/api', router);

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

router.route('/songs')
    .get(function(req,res)
    {
        Song.find(function(err, songs)
        {
            if (err)
                res.send(err);
            res.json(songs)
        }).where('hidden').equals('false')
    })
    .post(function(req, res)
    {
            var song = new Song();
            song.artist = req.body.artist;
            song.title = req.body.title;
            song.hidden = req.body.hidden;
            song.votes = req.body.votes;
            song.user_id = 'unused'
            song.save(function (err)
            {
                if (err)
                    res.send(err);
                res.json({message: 'User successfully added!'});
            }
        );
    });

router.route('/songs/:song_id')
    .put(function(req, res) {
        Song.findById(req.params.song_id, function (err, song) {
            if (err)
                res.send(err);
            (res.body.artist) ? song.artist = req.body.artist : null;
            (res.body.title) ? song.title = req.body.title : null;
            song.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: 'User has been updated'});
            });
        });
    })
    .delete(function(req, res)
    {
        Song.remove({_id: req.params.song_id }, function(err, song)
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
            //require admin auth
            user.save(function (err)
                {
                    if (err)
                        res.send(err);
                    res.json(user);
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
        console.log(req.params.user_id);
        User.remove({_id: req.params.user_id }, function(err, comment)
        {
            if (err)
                res.send(err);
            res.json({message: 'User has been deleted'})
        })
    });

router.route('/rsvpadd') //TODO: FIX to Allow Multiple at once
    .post(function(req,res)
    {
        let rsvparr = []
        req.body.rsvp.forEach(function(r)
        {
            if(r !== null) {
                let rsvp = new RSVP();
                rsvp.id = req.body.userid;
                rsvp.num = r.num;
                rsvp.name = r.name;
                rsvp.attending = r.attending;
                rsvp.food = r.food;
                rsvp.consideration = r.consideration;
                console.log(rsvp);
                rsvparr.push(rsvp);
            }
        });
        RSVP.insertMany(rsvparr,{ordered:false},function(err,docs)
        {
            if (err)
                res.send(err);
            res.json({message: 'RSVP successfully added!'});
        });
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