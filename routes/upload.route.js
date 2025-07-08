const express = require('express')
const router = express.Router()
const multer = require('multer')

const upload = multer({
  storage: multer.memoryStorage()
})

const uploadController = require('../controllers/upload.controller')

router.post('/', upload.single('file'), uploadController.handleUpload)

module.exports = router
