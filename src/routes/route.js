const express = require('express');
const router = express.Router();

const districtController = require('../controller/distictContoller')
const weatherController = require('../controller/weatherController')
const memeController = require('../controller/memeController')

router.get('/getByDistrictID', districtController.getByDistrictID)
router.get('/getWhether', weatherController.getCurrentWeather)
router.post('/meme', memeController.meme)


module.exports = router;