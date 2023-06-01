const passport = require('passport');
const flash = require('connect-flash');
const User = require('../models/user');
const mongoose = require('mongoose');



module.exports.userDetails=async(req,res,next)=>{

    // const {id}=req.params;

    
        
const date = new Date()
const formatters = new Intl.DateTimeFormat('sv', { dateStyle: 'short', timeZone: 'Asia/Kolkata' })
const stamp = formatters.format(date);

const fakeData= new User({
    names:'Harish_User',
    email:'harish_user@gmail.com',
    mobileNumber:'9678789377',
    createdOn:stamp,
    userType:'Creator',
    walletAddress:'qwertyuiopasdfghjkl',
    profilePic:'https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg',
    isCreator:true,
    campaignIds: new mongoose.Types.ObjectId(),
    transactionIds:new mongoose.Types.ObjectId()
})
await fakeData.save()
    const {id} = fakeData;
    const user=await User.findById(id);
    console.log(user)
    res.status(200).json(user)

    
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


module.exports.updateUser = async (req, res) => {
const id = req.user._id;
const s = req.body;
const update = await User.findByIdAndUpdate(id, { ...req.body});
//  const update = await User.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
const imgs = await req.files.map(f => ({ url: f.path, filename: f.filename }));
await update.images.push(...imgs);
await update.save();
}
