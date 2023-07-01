const router = require('express').Router()
const kanjiController = require('../controllers/Kanji')

router.get('/list/:grade', kanjiController.getAllKanjiByGrade)

module.exports = router