const express = require('express');
const router = express.Router();
const uiController = require('../controllers/uiController');
const { generateUI, exportUI } = require("../controllers/uiController");
const validateJson = require("../middleware/validateJson");

// router.get('/', uiController.getUI);
// router.post('/', uiController.createUI);
// router.post("/generate", validateJson, generateUI);
// router.get("/export/:id", exportUI);

router.post('/your-route', (req, res) => {
    res.send('POST request to the homepage');
});

// Example of a correct route definition
router.post('/example', (req, res) => {
  // Your callback function logic here
  res.send('Example POST route');
});

module.exports = router;