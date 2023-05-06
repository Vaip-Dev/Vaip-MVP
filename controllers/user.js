const passport = require('passport');
const flash = require('connect-flash');
const User = require('../models/user');


module.exports.renderRegister = (req, res) => {
    console.log(req.user.username)
    res.send('register')
}


module.exports.register = async(req, res, next)=>{
    const { username, name, userType, walletAddress, profilePic, password} = req.body;
    console.log(`req.body.....${req.body.username}`)
    const date = new Date()
    const formatters = new Intl.DateTimeFormat('sv', { dateStyle: 'short', timeZone: 'Asia/Kolkata' })
    const stamp = formatters.format(date);
    const user = new User({
        username:username,
        name:name,
        userType:userType,
        walletAddress:walletAddress,
        profilePic:profilePic,
        createdOn: stamp
    });
    console.log(`user.....${user}`)

    const registeredUser = await User.register(user, password);
    console.log(`registeredUser.....${registeredUser}`)

    req.login(registeredUser, err => {
        if (err) return next(err);
        // req.flash('success', `Welcome to GetMeat ${user.name}`);
        // res.redirect(`${redirectUrl}`);
        console.log('success')
        res.send('campaign')
    });
}