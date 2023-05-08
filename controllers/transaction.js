const flash = require('connect-flash');
const User = require('../models/user');
const Transaction = require('../models/transaction');


module.exports.renderTransaction = (req, res) => {
    // console.log(req.user._id);
    res.send('Transaction')
}



module.exports.transaction = async(req, res, next)=>{
    const date = new Date()
    const formatters = new Intl.DateTimeFormat('sv', { dateStyle: 'short', timeZone: 'Asia/Kolkata' })
    const stamp = formatters.format(date);
    const transaction=new Transaction({
        id:req.user._id,
        email:req.user.username,
        nftName,
        nftsBought,
        amountInvested,
        investedOn:stamp
    });
    await transaction.save();
    console.log(transaction)
    res.send('transaction saved')
    
}