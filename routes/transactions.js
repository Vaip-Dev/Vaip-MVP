const express = require('express');
const router = express.Router();
const transactions= require('../controllers/transaction')

router.route('/campaign')
    .get(campaigns.renderCampaign)
    .post(campaigns.campaign);


module.exports = router;