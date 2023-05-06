const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    createdOn: {
        type: String,
        required: true,
    },
    userType:{
        type:String,
        required: true,

    },
    walletAddress:{
        type:String,
        required: true,

    },
    profilePic:{
        type:String,
        required: true,

    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);