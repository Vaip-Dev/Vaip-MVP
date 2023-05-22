const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const Transaction = require('./transaction');
const Campaign = require('./campaign');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true,
    },
    mobileNumber:{
        type:Number,
        required:false
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
    },
    isCreator:{
        type:Boolean,
        required:true
    },
    campaignIds:{
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    },
    transactionIds:{
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    }
    // creator platform details
    // isCreator? - boolean
    //Add Campaigns array
    //Add TransactionIds - array
    
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);