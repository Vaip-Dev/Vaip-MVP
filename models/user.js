const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const { boolean } = require('webidl-conversions');
const Transaction = require('./transaction');
const Campaign = require('./campaign');

const UserSchema = new Schema({
    // username: {
    //     type: String,
    //     required: true,
    //     unique:true
    // },
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
    },
    isCreator:{
        type:boolean,
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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);