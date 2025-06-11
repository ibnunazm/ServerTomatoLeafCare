const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { classifyImage } = require('../controllers/classificationController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/classify', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file uploaded' });
        }

        const imagePath = path.join(__dirname, `../${req.file.path}`);
        const predictedClass = await classifyImage(imagePath);

        fs.unlinkSync(imagePath);

        res.json({
            success: true,
            predictedClass,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

