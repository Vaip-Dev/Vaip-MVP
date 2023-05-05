const passport = require('passport');
const flash = require('connect-flash');
const User = require('../models/user');


module.exports.renderRegister = (req, res) => {
   
    res.render('register')
}


module.exports.register = async(req, res, next)=>{
    const { username, name, userType, walletAddress, profilePic, password} = req.body;
console.log(`req.body.....${req.body.username}`)
    const user = new User({
        username:username,
        name:name,
        userType:userType,
        walletAddress:walletAddress,
        profilePic:profilePic
    });
    console.log(`user.....${user}`)

    const hello = await User.register(user, password);
    console.log(`hello.....${hello}`)

    // req.login(registeredUser, err => {
    //     if (err) return next(err);
    //     // req.flash('success', `Welcome to GetMeat ${user.name}`);
    //     // res.redirect(`${redirectUrl}`);
        console.log('success')
        res.redirect(`/`);
    // });
}