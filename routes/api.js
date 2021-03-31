const router = require('express').Router()
const cors = require('cors')
const apiController = require('../controller/apiController')
const { upload } = require('../middlewares/multer')

router.get('/landing-page', apiController.landingPage)
router.get('/detail-page/:id', apiController.detailPage)
router.post('/booking-page', cors(), upload, apiController.bookingPage)

module.exports = router