const express = require('express');
const router = express.Router();
const giftcardController = require('../controllers/Giftcards');
const multer = require('multer')

router.post('/addgiftcard', giftcardController.addGiftcard)
router.get('/', giftcardController.fetchAllGiftcards)
router.get('/fetchGiftcardByGiftcardID/:id?', giftcardController.fetchGiftcardByGiftcardID)

module.exports = router