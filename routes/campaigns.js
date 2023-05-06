const express = require('express');
const router = express.Router();
const campaigns = require('../controllers/campaign')

router.route('/campaign')
    .get(campaigns.renderCampaign)
    .post(campaigns.campaign);


module.exports = router;