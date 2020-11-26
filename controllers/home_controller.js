//module.exports.actionName = function(req,res){}

const Post = require('../models/post');

module.exports.home = function(req,res){
    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title: "ShareEmo | Home",
    //         posts: posts
    //     });
    // });

    //populate the user of each post
    Post.find({}).populate('user').exec(function(err,posts){
        //if(err){console.log(err);return}
        return res.render('home',{
            title: "ShareEmo | Home",
            posts: posts
        });
    })
}