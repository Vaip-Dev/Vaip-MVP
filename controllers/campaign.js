const flash = require('connect-flash');
const User = require('../models/user');
const Campaign = require('../models/campaign');


module.exports.renderCampaign = (req, res) => {
    // console.log(req.user._id);
    res.send('Campaign')
}

    

module.exports.campaign = async(req, res, next)=>{
    const { tenure, minInvestment, photo, ask, revenueShare , startDate, endDate, description, payoutCycle } = req.body;
    const campaign=new Campaign({
        id:req.user._id,
        email:req.user.username,
        photo,
        ask,
        tenure,
        minInvestment,
        revenueShare,
        startDate,
        endDate,
        description,
        payoutCycle
    });
    await campaign.save();
    console.log(campaign)
    res.send('campaig saved')
    
}