module.exports.profile = function(req,res){
    res.end('<h1>Profile</h1>');
}

module.exports.userProfile = function(req,res){
    return res.render('user_profile',{
        title: "User Profile"
    });
}