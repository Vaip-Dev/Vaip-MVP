const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
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
    nftName: {
        type: String,
        required: true,
    },
    nftsBought: {
        type: Number,
        required: true,
    },
    amountInvested:{
        type:Number,
        required: true,

    },
    investedOn:{
        type:Number,
        required: true,

    }
});

// UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Transaction', transactionSchema);