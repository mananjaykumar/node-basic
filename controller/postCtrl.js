const Post = require('../models/postModel');

exports.getPosts = (req, res) => {
    res.json({
        post: [{
            title: "title 1",
            body: "body 1"
        },
        {
            title: "title 2",
            body: "body 2"
        }]
    });
}

exports.createPosts = (req, res) => {
    const post = new Post(req.body)
    post.save((err, result) => {
        if(err)
            return res.json({error: err});
        res.json({
            post: result
        });
    });
    // console.log(req.body);
}

