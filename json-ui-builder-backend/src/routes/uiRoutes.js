const express = require('express');
const uiController = require('../controllers/uiController');
const validateJson = require('../middleware/validateJson');

const router = express.Router();

router.post('/process', validateJson, uiController.processJson);
router.post('/render', validateJson, uiController.renderUi);
router.post('/customize', validateJson, uiController.customizeUi);
router.post('/preview', validateJson, uiController.livePreview);
router.post('/export', validateJson, uiController.exportUi);

module.exports = router;
