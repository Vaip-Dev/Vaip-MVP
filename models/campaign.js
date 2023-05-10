const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const CampaignSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:false
    },
    id: {
        type: String,
        required: true,
        unique:false
    },
    photo: {
        type: String,
        required: true,
    },
    ask: {
        type: Number,
        required: true,
    },
    tenure:{
        type:Number,
        required: true,

    },
    minInvestment:{
        type:Number,
        required: true,

    },
    startDate:{
        type:String,
        required: true,

    },
    endDate:{
        type:String,
        required: true,

    },
    description:{
        type:String,
        required: true,

    },
    payoutCycle:{
        type:String,
        required: true,

    },
    // status:{
    //     type:String,
    //     required: true,

    // },
    revenueShare:{
        type:Number,
        required: true,

    }

    // NFT - Details
    // number of NFTs

    // Array - Invertors details (userId)
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Campaign', CampaignSchema);